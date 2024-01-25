import React, { createContext, useContext } from 'react';

export const FilterContext = createContext({});

export const FilterProvider = ({ id, children }) => {
    return <FilterContext.Provider value={id}>{children}</FilterContext.Provider>;
};

export const useFilterContext = () => {
    const id = useContext(FilterContext);
    if (id === undefined) {
        throw new Error('useFilterContext must be used within a TableProvider');
    }

    return id;
};
