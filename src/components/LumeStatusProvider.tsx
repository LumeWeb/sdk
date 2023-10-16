import { createContext, useState, useContext, ReactNode } from "react";

// LumeStatusContextType
interface LumeStatusContextType {
  inited: boolean;
  setInited: (value: boolean) => void;
  ready: boolean;
  setReady: (value: boolean) => void;
}

// LumeStatusContext
export const LumeStatusContext = createContext<
  LumeStatusContextType | undefined
>(undefined);

// LumeStatusProvider
interface LumeStatusProviderProps {
  children: ReactNode;
}

export const LumeStatusProvider: React.FC<LumeStatusProviderProps> = ({
  children,
}) => {
  const [inited, setInited] = useState(false);
  const [ready, setReady] = useState(false);

  return (
    <LumeStatusContext.Provider value={{ inited, setInited, ready, setReady }}>
      {children}
    </LumeStatusContext.Provider>
  );
};

// useLumeStatus hook
export function useLumeStatus() {
  const context = useContext(LumeStatusContext);

  if (!context) {
    throw new Error("useLumeStatus must be used within a LumeStatusProvider");
  }

  return context;
}

export default LumeStatusProvider;
