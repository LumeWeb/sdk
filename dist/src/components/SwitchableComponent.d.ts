import React from "react";
export declare const SwitchableComponentProvider: ({ children }: React.PropsWithChildren) => import("react/jsx-runtime").JSX.Element;
export declare function useSwitchableComponent(initialValue?: SwitchableComponentType): SwitchableComponentContextType<unknown>;
export declare const SwitchableComponent: ({ children, index }: React.PropsWithChildren<{
    index: string;
}>) => import("react/jsx-runtime").JSX.Element;
type SwitchableComponentType<T extends {} = {}> = {
    index: string;
    render: (props: T | any) => ReturnType<React.FC>;
};
type SwitchableComponentContextType<T = unknown> = {
    visibleComponent: SwitchableComponentType<T extends {} ? T : any>;
    setVisibleComponent: React.Dispatch<React.SetStateAction<SwitchableComponentType<T extends {} ? T : any> | undefined>>;
};
export declare function makeSwitchable<T extends {}>(Component: React.FC<T>, index: string): {
    render(props: T): import("react/jsx-runtime").JSX.Element;
    index: string;
};
export {};
