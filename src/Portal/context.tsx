import React, { createContext, FC, PropsWithChildren, useContext, useMemo } from 'react';
import { GetContainer } from './types';

export interface PortalContext {
    getContainer?: GetContainer;
}

const Context = createContext<PortalContext>({});

export function usePortal() {
    return useContext(Context);
}

export const PortalProvider: FC<PropsWithChildren<PortalContext>> = ({ getContainer, children }) => {
    const context = useMemo(() => ({ getContainer }), [getContainer]);
    return <Context.Provider value={context}>{children}</Context.Provider>;
};
