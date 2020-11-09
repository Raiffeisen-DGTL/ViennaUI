import React, { ReactNode, createContext, useContext, useState, useCallback, useEffect } from 'react';
import { TableConfig, TableState, TableService } from '../../types';
import { tableService } from '../../TableService';

export const Context = createContext({});
export const { Consumer } = Context;

interface TableContext {
    service: TableService;
    config: TableConfig;
}

interface TableProviderProps {
    config: TableConfig;
    state: TableState;
    isForcedState: boolean;
    service?: () => TableService;
    children: ReactNode;
    data: any;
    onStateUpdate?;
    onServiceInit?;
}

export const TableProvider = (props: TableProviderProps) => {
    const { children, data, config, state, onStateUpdate, onServiceInit, isForcedState } = props;

    const [tableState, updateTableState] = useState(state);

    const updateState = useCallback(
        (newState: TableState) => {
            updateTableState(newState);

            if (typeof onStateUpdate === 'function') {
                onStateUpdate(newState);
            }
        },
        [onStateUpdate, updateTableState]
    );

    const serviceFactory = props.service ?? tableService;
    const service = serviceFactory(tableState, updateState, config, data);

    if (typeof onServiceInit === 'function') {
        onServiceInit(service);
    }

    const context: TableContext = {
        service,
        config,
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
