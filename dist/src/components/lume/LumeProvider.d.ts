import React from 'react';
type LumeSyncState = 'syncing' | 'done' | 'error';
export type Chain = {
    syncState: LumeSyncState;
    name: string;
    chainId: string;
    active: boolean;
    progress: number;
    logs: string[];
    type: 'blockchain' | 'content';
    peerCount?: number;
};
type LumeObject = {
    chains: Chain[];
    activeResolver: 'local' | 'rpc';
};
declare const LumeProvider: ({ children }: {
    children: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export default LumeProvider;
export declare function useLume(): LumeObject;
