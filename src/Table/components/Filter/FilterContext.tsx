import React, { createContext, ReactNode, useContext } from 'react';

export const FilterContext = createContext('');

export interface FilterProviderProps {
    id: string;
    children: ReactNode;
}

export const FilterProvider = ({ id, children }: FilterProviderProps) => {
    return <FilterContext.Provider value={id}>{children}</FilterContext.Provider>;
};

export const useFilterContext = () => {
    const id = useContext(FilterContext);
    if (id === undefined) {
        throw new Error('useFilterContext must be used within a TableProvider');
    }

    return id;
};
