import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { createClient as createNetworkRegistryClient } from "@lumeweb/kernel-network-registry-client";
import { createNetworkClient } from "@lumeweb/libkernel/module";

type SyncState = "done" | "syncing" | "error";

export interface Network extends NetworkStatus {
  name: string;
  id: string;
  type: string;
  syncState: SyncState;
}

interface NetworkStatus {
  sync: number;
  peers: number;
  ready: boolean;
  error?: string;
}

export interface NetworksContextType {
  networks: Network[];
  setNetworks: React.Dispatch<React.SetStateAction<Network[]>>;
}

const networkRegistry = createNetworkRegistryClient();

// Networks Context
const NetworksContext = createContext<NetworksContextType | undefined>(
  undefined,
);

const NetworksProvider = ({ children }) => {
  const [networks, setNetworks] = useState<Network[]>([]);
  const statusUnsubs = useRef(new Map());
  const isMounted = useRef(true); // Use a ref to track mounting

  const handleStatusUpdate = useCallback((id, newNetwork) => {
    setNetworks((prevNetworks) => {
      return prevNetworks.map((network) =>
        network.id === id ? { ...network, ...newNetwork } : network,
      );
    });
  }, []);

  const fetchAndUpdateNetworks = useCallback(async () => {
    const unsub = () => {
      statusUnsubs.current.forEach((unsub) => unsub());
      statusUnsubs.current.clear();
    };

    try {
      const types = await networkRegistry.getTypes();
      const newNetworksMap = new Map();
      const newStatusUnsubs = new Map();

      for (const type of types) {
        if (!isMounted.current) {
          unsub();
          return;
        }
        const list = await networkRegistry.getNetworksByType(type);
        for (const module of list) {
          const client = createNetworkClient(module);
          const name = await client.name();

          const initialNetworkStatus = {
            peers: 0,
            ready: false,
            sync: 0,
            type,
            name,
            id: module,
            syncState: "syncing",
          };

          const statusUnsub = client.status((newStatus) => {
            const syncState = newStatus.ready
              ? "done"
              : newStatus.error
              ? "error"
              : "syncing";
            handleStatusUpdate(module, { ...newStatus, syncState });
          });

          newStatusUnsubs.set(module, statusUnsub);
          newNetworksMap.set(module, initialNetworkStatus);
        }
      }

      statusUnsubs.current.forEach((unsub) => unsub());
      statusUnsubs.current = newStatusUnsubs;

      if (isMounted.current) {
        setNetworks(Array.from(newNetworksMap.values()));
      } else {
        unsub();
      }
    } catch (error) {
      if (isMounted.current) {
        console.error("Error fetching and updating networks:", error);
      }
    }
  }, [handleStatusUpdate]);

  useEffect(() => {
    fetchAndUpdateNetworks();

    const subDone = networkRegistry.subscribeToUpdates(() =>
      fetchAndUpdateNetworks(),
    );

    return () => {
      isMounted.current = false; // Track component unmounting
      subDone?.();
      statusUnsubs.current.forEach((unsub) => unsub());
    };
  }, [fetchAndUpdateNetworks]);

  return (
    <NetworksContext.Provider value={{ networks, setNetworks }}>
      {children}
    </NetworksContext.Provider>
  );
};

export function useNetworks() {
  const context = useContext(NetworksContext);
  if (!context) {
    throw new Error("useNetworks must be used within a NetworksProvider");
  }
  return context;
}

export default NetworksProvider;
