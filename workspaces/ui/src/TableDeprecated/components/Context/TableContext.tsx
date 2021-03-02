import React, { ReactNode, createContext, useContext, useEffect } from 'react';
import { useStateCallback } from 'vienna.react-use';
import { TableConfig, TableState, TableService, TableFeatures, UpdateTableState } from '../../types';
import { TableLocalizationContext } from '../../localization';
import { tableService } from '../../TableService';
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
    service?: () => TableService;
    children: ReactNode;
    data: any;
    localization: TableLocalizationContext;
}

export const TableProvider = (props: TableProviderProps) => {
    const { children, data, config, state, features, tableEvents, isForcedState, localization } = props;

    const [tableState, updateTableState] = useStateCallback(state);

    const updateState: UpdateTableState = (id, newState) => {
        updateTableState(newState, (s) => {
            tableEvents.UpdateState(s, id);
        });
    };

    const serviceFactory = props.service ?? tableService;
    const service = serviceFactory(tableState, updateState, config, data);
    tableEvents.InitService(service);

    const context: TableContext = {
        service,
        config,
        features,
        localization,
    };

    useEffect(() => {
        if (isForcedState) {
            updateTableState(state);
        }
    }, [state, isForcedState, updateTableState]);

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
