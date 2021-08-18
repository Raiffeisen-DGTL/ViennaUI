import { useMemo } from 'react';
import { useStateCallback } from 'vienna.react-use';
import { UpdateTableState } from '../../types';
import { ServiceFactoryConfig } from './ServiceFactory';
import { tableService, TableService } from './TableService';

export const useCreateTableService = (props) => {
    const { state, config, data, tableEvents, isForcedState } = props;
    const [tableState, updateTableState] = useStateCallback(state);

    const service: TableService = useMemo(() => {
        // get the service factory
        const serviceFactory: ServiceFactoryConfig<TableService> = props.service ?? tableService;

        // define an updater function
        const stateless: UpdateTableState = (id, newState) => {
            tableEvents.Update(newState, id);
        };

        const stateful: UpdateTableState = (id, newState) => {
            updateTableState(newState, (newState) => {
                tableEvents.Update(newState, id);
            });
        };

        const updateState = isForcedState ? stateless : stateful;

        // create service
        const service = serviceFactory(state, updateState, config, data);
        tableEvents.Init(service, state);

        return service;
    }, [props.service, isForcedState]);

    // sync state
    const currentState = isForcedState ? state : tableState;
    service.sync(currentState, data);

    return service;
};
