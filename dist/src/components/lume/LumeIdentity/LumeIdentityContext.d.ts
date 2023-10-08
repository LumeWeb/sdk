import React from "react";
export type Session = string;
export declare const LumeIdentityContext: React.Context<{
    session: Session | undefined;
    setSession: React.Dispatch<React.SetStateAction<Session | undefined>>;
} | undefined>;
export declare function useLumeIndentity(): {
    isSignedIn: boolean;
    signIn: (key: string) => void;
    signOut: () => void;
};
