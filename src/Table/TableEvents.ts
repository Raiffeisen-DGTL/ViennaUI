import { TableProps } from './Table';
import { TableState } from './types';
import { TableService, FilterModule, SortModule } from './components';

export interface TableEvents {
    Init: (service: TableService, state: TableState) => void;
    Update: (state: TableState, id: string) => void;
}

interface TableHandlers {
    onInit: TableProps['onInit'];
    onUpdate: TableProps['onUpdate'];
    onSort: TableProps['onSort'];
    onFilter: TableProps['onFilter'];
}

// Some of the handlers accept an event which doesn't exists in this context as a first argument
// Those handlers will be refactored, but meanwhile using undefined as a temporary stub
const e = undefined;

const handlers = {
    init: (handlers: TableHandlers, service: TableService, state: TableState) => {
        const handler = handlers.onInit;
        handler?.({ service, state });
    },
    update: (handlers: TableHandlers, state: TableState, id: string) => {
        const handler = handlers.onUpdate;
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
        Init: (service, state) => {
            call('init', config, [service, state]);
        },
        Update: (state, id) => {
            call(id, config, [state]);
            call('update', config, [state, id]);
        },
    };
};
