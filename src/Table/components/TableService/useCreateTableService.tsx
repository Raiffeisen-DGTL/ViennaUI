import { useMemo, useEffect, useState } from 'react';
import { TableConfig, TableState, UpdateTableState } from '../../types';
import { tableService, TableService } from './TableService';
import { isEqualArraysObjects } from '../../../Utils';
import { TableProviderProps } from '../Context';
import { ColumnProps } from '../Column';

export const useCreateTableService = <T,>(props: TableProviderProps<T>) => {
    const { state, config, data, tableEvents, isForcedState } = props;

    const [tableState, setTableState] = useState(state);
    const [actions, setActions] = useState<Record<string, (state: TableState<T>) => void>>({});
    useEffect(() => {
        if (!Object.keys(actions).length) {
            return;
        }
        Object.entries(actions).forEach(([key, action]) => {
            action(tableState);
            setActions((actions) => {
                const newActions = { ...actions };
                delete newActions[key];
                return newActions;
            });
        });
    }, [actions, tableState]);

    const service: TableService<T> = useMemo(() => {
        // get the service factory
        const serviceFactory: (
            state: TableState<T>,
            update: UpdateTableState<T>,
            config: TableConfig<T>,
            data: T[]
        ) => TableService<T> = props.service ?? tableService;

        // define an updater function
        const stateless: UpdateTableState<T> = (id, newState) => {
            tableEvents.Update(typeof newState === 'function' ? newState(state) : newState, id as string);
        };

        const stateful: UpdateTableState<T> = (id, newState) => {
            setTableState(newState);
            setActions((actions) => {
                return {
                    ...actions,
                    [id as string]: (cbState) => {
                        const state = typeof newState === 'function' ? cbState : newState;
                        tableEvents.Update(state, id as string);
                    },
                };
            });
        };

        const updateState = isForcedState ? stateless : stateful;

        // create service
        const service = serviceFactory(state, updateState, config, data);
        tableEvents.Init(service, state);

        return service;
    }, [props.service, tableEvents, state, isForcedState]);

    // update state when table columns changed
    useEffect(() => {
        if (isForcedState) {
            return;
        }
        const stateColumnsAreDiff = !isEqualArraysObjects(
            state.columns?.list ?? [],
            tableState.columns?.list ?? [],
            true,
            true
        );
        if (stateColumnsAreDiff) {
            setTableState((currentTableState) => {
                const list: ColumnProps<T>[] = state.columns?.list ?? currentTableState.columns?.list ?? [];
                return { ...currentTableState, columns: { ...currentTableState.columns, list } };
            });
        }
    }, [isForcedState, state]);

    // sync state
    const currentState = isForcedState ? state : tableState;
    service.sync(currentState, data);

    return { service, state: tableState };
};
