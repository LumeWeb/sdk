import {
  login,
  // loginComplete,
  // logoutComplete,
} from "@lumeweb/libkernel/kernel";
import { useLume } from "../LumeProvider";

export function useLumeIndentity() {
  const {isLoggedIn, setIsLoggedIn} = useLume();

  return {
    isSignedIn: isLoggedIn,
    async signIn(key: Uint8Array) {
      await login(key);
      // await loginComplete(); # this function is buggy `auth.ts:42 Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'promise') `
      setIsLoggedIn(true);
    },
    async signOut() {
      // await logoutComplete();
      setIsLoggedIn(false);
    },
  };
}
