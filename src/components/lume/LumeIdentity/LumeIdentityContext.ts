import React, { useEffect, useState } from "react";
import {
  login,
  loginComplete,
  logoutComplete,
} from "@lumeweb/libkernel/kernel";

export function useLumeIndentity() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    loginComplete().then(() => {
      setLoggedIn(true);
    });
    logoutComplete().then(() => {
      setLoggedIn(false);
    });
  });

  return {
    isSignedIn: loggedIn,
    async signIn(key: Uint8Array) {
      await login(key);
    },
    signOut: () => {},
  };
}
