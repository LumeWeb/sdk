import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import type { ReactNode } from "react";
import { createClient as createNetworkRegistryClient } from "@lumeweb/kernel-network-registry-client";
import { createNetworkClient } from "@lumeweb/libkernel/module";

export interface Network extends NetworkStatus {
  name: string;
  id: string;
  type: string;
}

interface NetworkStatus {
  sync: number;
  peers: number;
  ready: boolean;
}

type LumeObject = {
  networks: Network[];
};

type LumeContext = {
  lume: LumeObject;
};

const networkRegistry = createNetworkRegistryClient();

const LumeContext = createContext<LumeContext | undefined>(undefined);

const LumeProvider = ({ children }: { children: ReactNode }) => {
  const [lume, setLume] = useState<LumeObject>({ networks: [] });

  // Map to store unsubscribe functions for client.status subscriptions
  const statusUnsubs = useRef(new Map());

  const handleStatusUpdate = useCallback(
    (id: string, newStatus: NetworkStatus) => {
      setLume((prevLume) => {
        const updatedNetworks = prevLume.networks.map((network) =>
          network.id === id ? { ...network, ...newStatus } : network
        );
        return { ...prevLume, networks: updatedNetworks };
      });
    },
    []
  );

  const update = async () => {
    const types = await networkRegistry.getTypes();
    const newNetworksMap = new Map(); // Use a Map to prevent duplicates based on chainId
    const newStatusUnsubs = new Map();

    for (const type of types) {
      const list = await networkRegistry.getNetworksByType(type);

      for (const module of list) {
        const client = createNetworkClient(module);
        const name = await client.name();

        const network: Network = {
          peers: 0,
          ready: false,
          sync: 0,
          type,
          name,
          id: module,
        };

        // Subscribe to status updates
        const statusUnsub = client.status((newStatus: NetworkStatus) =>
          handleStatusUpdate(module, newStatus)
        );
        newStatusUnsubs.set(module, statusUnsub);

        newNetworksMap.set(module, network); // Store network in map to prevent duplicates
      }
    }

    // Unsubscribe from previous status updates
    statusUnsubs.current.forEach((unsub) => unsub());
    // Store new unsubscribe functions
    statusUnsubs.current = newStatusUnsubs;

    setLume((prevLume) => ({
      ...prevLume,
      networks: Array.from(newNetworksMap.values()),
    })); // Convert Map values to array
  };

  const subDone = networkRegistry.subscribeToUpdates(update);

  useEffect(() => {
    update(); // Initial update on component mount

    return () => {
      subDone(); // Unsubscribe from network registry updates on component unmount
      // Unsubscribe from all client.status updates
      statusUnsubs.current.forEach((unsub) => unsub());
    };
  }, []);

  return (
    <LumeContext.Provider value={{ lume }}>{children}</LumeContext.Provider>
  );
};

export default LumeProvider;

export function useLume() {
  const ctx = useContext(LumeContext);

  if (!ctx) {
    throw new Error("useLume must be used within a LumeProvider");
  }

  const { lume } = ctx;
  return lume;
}
