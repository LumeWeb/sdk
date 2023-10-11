import {
  login,
  // loginComplete,
  // logoutComplete,
} from "@lumeweb/libkernel/kernel";
import { useLume } from "../LumeProvider";
import React, { useContext } from "react";

export const LumeIdentityContext = React.createContext<{open: boolean, setOpen: (open: boolean) => void} | undefined>(undefined);

export function useLumeIndentity() {
  const {isLoggedIn, setIsLoggedIn} = useLume();
  const ctx = useContext(LumeIdentityContext); 

  if(!ctx) {
    throw new Error("useLumeIdentity should be used inside LumeIdentityContext.Provider")
  }

  const {setOpen} = ctx;

  return {
    isSignedIn: isLoggedIn,
    async signIn(key: Uint8Array) {
      await login(key);
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
