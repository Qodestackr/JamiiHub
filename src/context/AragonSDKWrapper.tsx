import { createContext, useContext, useEffect, useState } from 'react';

import { useSigner } from 'wagmi';
import { context as aragonContext } from './aragonContext'

const AragonSDKContext = createContext({});

export function AragonSDKWrapper({ children }: any): JSX.Element {
    const [context, setContext] = useState<typeof aragonContext | undefined>(undefined); // ??
    const signer = useSigner().data || undefined;

    useEffect(() => {
        setContext(aragonContext);
    }, [signer]);

    return (
        <AragonSDKContext.Provider value={{ context }}>
            {children}
        </AragonSDKContext.Provider>
    )
}

export function useAragonSDKContext(): any {
    return useContext(AragonSDKContext);
}
