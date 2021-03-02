import { TableProps } from './Table';
import { TableState, TableService } from './types';
import { FilterModule, SortModule } from './components';

export interface TableEvents {
    InitService: (service: any) => void;
    UpdateState: (state: any, id: string) => void;
}

interface TableHandlers {
    onStateUpdate: TableProps['onStateUpdate'];
    onServiceInit: TableProps['onServiceInit'];
    onSort: TableProps['onSort'];
    onFilter: TableProps['onFilter'];
}

// Some of the handlers accept an event which doesn't exists in this context as a first argument
// Those handlers will be refactored, but meanwhile using undefined as a temporary stub
const e = undefined;

const handlers = {
    serviceInit: (handlers: TableHandlers, service: TableService) => {
        const handler = handlers.onServiceInit;
        handler?.(service);
    },
    stateUpdate: (handlers: TableHandlers, state: TableState, id) => {
        const handler = handlers.onStateUpdate;
        handler?.(state, id);
    },
    [SortModule.name]: (handlers: TableHandlers, state: TableState) => {
        const handler = handlers.onSort;
        handler?.(e, state[SortModule.name]);
    },
    [FilterModule.name]: (handlers: TableHandlers, state: TableState) => {
        const handler = handlers.onFilter;
        handler?.(state[FilterModule.name]);
    },
};

const call = (eventId, config: TableHandlers, args) => {
    const handler: any = handlers[eventId];

    if (!handler) {
        return;
    }

    handler(config, ...args);
};

export const initEvents = (config: TableHandlers): TableEvents => {
    return {
        InitService: (service) => {
            call('serviceInit', config, [service]);
        },
        UpdateState: (state, id) => {
            call(id, config, [state]);
            call('stateUpdate', config, [state, id]);
        },
    };
};
