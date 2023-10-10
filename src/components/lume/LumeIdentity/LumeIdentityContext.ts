import { useState } from "react";
import {
  login,
  // loginComplete,
  // logoutComplete,
} from "@lumeweb/libkernel/kernel";

export function useLumeIndentity() {
  const [loggedIn, setLoggedIn] = useState(false);

  return {
    isSignedIn: loggedIn,
    async signIn(key: Uint8Array) {
      await login(key);
      // await loginComplete(); # this function is buggy `auth.ts:42 Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'promise') `
      setLoggedIn(true);
    },
    async signOut() {
      // await logoutComplete();
      setLoggedIn(false);
    },
  };
}
