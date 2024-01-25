import React, { ReactNode, createContext, useContext } from 'react';
import { TableConfig, TableState, TableFeatures } from '../../types';
import { TableLocalizationContext } from '../../localization';
import { useCreateTableService, TableService, TableServiceFactory } from '../TableService';
import { TableEvents } from '../../TableEvents';

export const Context = createContext({});
export const { Consumer } = Context;

interface TableContext {
    service: TableService;
    config: TableConfig;
    features: TableFeatures;
    localization: TableLocalizationContext;
}

interface TableProviderProps {
    config: TableConfig;
    state: TableState;
    features: TableFeatures;
    tableEvents: TableEvents;
    isForcedState: boolean;
    service?: TableServiceFactory;
    children: ReactNode;
    data: any;
    localization: TableLocalizationContext;
}

export const TableProvider = (props: TableProviderProps) => {
    const { children, config, features, localization } = props;

    const service = useCreateTableService(props);

    const context: TableContext = {
        service,
        config,
        features,
        localization,
    };

    return <Context.Provider value={context}>{children}</Context.Provider>;
};

export const useTableContext = (): TableContext => {
    const context = useContext(Context) as TableContext;

    if (context === undefined) {
        throw new Error('useTable must be used within a TableProvider');
    }

    return context;
};

export const useTableService = (): TableService => {
    const context = useTableContext();

    return context.service;
};

export const useTableConfig = (): TableConfig => {
    const context = useTableContext();

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
