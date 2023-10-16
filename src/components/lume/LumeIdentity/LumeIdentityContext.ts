import {
  login,
  // loginComplete,
  // logoutComplete,
} from "@lumeweb/libkernel/kernel";
import React, { useContext } from "react";
import { useAuth } from "../../AuthProvider.js";

export const LumeIdentityContext = React.createContext<
  { open: boolean; setOpen: (open: boolean) => void } | undefined
>(undefined);

export function useLumeIdentity() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const ctx = useContext(LumeIdentityContext);

  if (!ctx) {
    throw new Error(
      "useLumeIdentity should be used inside LumeIdentityContext.Provider",
    );
  }

  const { setOpen } = ctx;

  return {
    isSignedIn: isLoggedIn,
    async signIn(key: Uint8Array) {
      await login(key.slice(0, 32));
      // await loginComplete(); # this function is buggy `auth.ts:42 Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'promise') `
      setIsLoggedIn(true);
      setOpen(false);
    },
    async signOut() {
      // await logoutComplete();
      setIsLoggedIn(false);
      setOpen(false);
    },
  };
}
