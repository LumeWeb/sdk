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
import { init, loginComplete } from "@lumeweb/libkernel/kernel";

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

type LumeObject = {
  networks: Network[];
};

type LumeContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  lume: LumeObject;
  ready: boolean;
};

const networkRegistry = createNetworkRegistryClient();

const LumeContext = createContext<LumeContextType | undefined>(undefined);

const LumeProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [ready, setReady] = useState<boolean>(false);
  const [lume, setLume] = useState<LumeObject>({ networks: [] });
  const statusUnsubs = useRef(new Map());
  const isMounted = useRef(true); // Use a ref to track mounting

  const handleStatusUpdate = useCallback((id, newNetwork) => {
    setLume((prevLume) => {
      const updatedNetworks = prevLume.networks.map((network) =>
        network.id === id ? { ...network, ...newNetwork } : network,
      );
      return { ...prevLume, networks: updatedNetworks };
    });
  }, []);

  const fetchAndUpdateNetworks = useCallback(async () => {
    const unsub = () => {
      statusUnsubs.current.forEach((unsub) => unsub());
      statusUnsubs.current = new Map<any, any>();
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
        setLume((prevLume) => ({
          ...prevLume,
          networks: Array.from(newNetworksMap.values()),
        }));
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
    loginComplete().then(() => isMounted.current && setIsLoggedIn(true));
    init().then(() => isMounted.current && setReady(true));

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
    <LumeContext.Provider value={{ lume, ready, isLoggedIn, setIsLoggedIn }}>
      {children}
    </LumeContext.Provider>
  );
};

export default LumeProvider;

export function useLume() {
  const ctx = useContext(LumeContext);

  if (!ctx) {
    throw new Error("useLume must be used within a LumeProvider");
  }

  return ctx;
}
