import React, { ReactNode, createContext, useContext } from 'react';
import { TableConfig, TableState, TableFeatures, TableData } from '../../types';
import { TableLocalizationContext } from '../../localization';
import { useCreateTableService, TableService, TableServiceFactory } from '../TableService';
import { TableEvents } from '../../TableEvents';

export const Context = createContext({});
export const { Consumer } = Context;

interface TableContext<T> {
    state: TableState<T>;
    service: TableService<T>;
    config: TableConfig<T>;
    features: TableFeatures;
    localization: TableLocalizationContext;
}

export interface TableProviderProps<T> {
    config: TableConfig<T>;
    state: TableState<T>;
    features: TableFeatures;
    tableEvents: TableEvents<T>;
    isForcedState: boolean;
    service?: TableServiceFactory<T>;
    children: ReactNode;
    data: T[];
    localization: TableLocalizationContext;
}

export const TableProvider = (props: TableProviderProps<TableData>) => {
    const { children, config, features, localization } = props;

    const { service, state } = useCreateTableService(props);

    const context: TableContext<TableData> = {
        state,
        service,
        config,
        features,
        localization,
    };

    return <Context.Provider value={context}>{children}</Context.Provider>;
};

export const useTableContext = <T,>(): TableContext<T> => {
    const context = useContext(Context) as TableContext<T>;

    if (context === undefined) {
        throw new Error('useTable must be used within a TableProvider');
    }

    return context;
};

export const useTableService = <T,>(): TableService<T> => {
    const context = useTableContext<T>();

    return context.service;
};

export const useTableConfig = <T,>(): TableConfig<T> => {
    const context = useTableContext<T>();

    return context.config;
};

export const useTableFeatures = (): TableFeatures => {
    const context = useTableContext();

    return context.features;
};

export const useTableLocalization = (): TableLocalizationContext => {
    const context = useTableContext();

    return context.localization;
};

export const useTableState = <T,>(): TableState<T> => {
    const context = useTableContext<T>();

    return context.state;
};
