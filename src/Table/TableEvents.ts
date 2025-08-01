// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { TableProps } from './Table';
import { TableState } from './types';
import { TableService, FilterModule, SortModule } from './components';

export interface TableEvents<T> {
    Init: (service: TableService<T>, state: TableState<T>) => void;
    Update: (state: TableState<T>, id: string) => void;
}

interface TableHandlers<T> {
    onInit: TableProps<T>['onInit'];
    onUpdate: TableProps<T>['onUpdate'];
    onSort: TableProps<T>['onSort'];
    onFilter: TableProps<T>['onFilter'];
}

// Some of the handlers accept an event which doesn't exists in this context as a first argument
// Those handlers will be refactored, but meanwhile using undefined as a temporary stub
const DEFAULT_EVENT = undefined;

type HandlersType<T> =
    | ((handlers: TableHandlers<T>, state: TableState<T>, service: TableService<T>) => void)
    | ((handlers: TableHandlers<T>, state: TableState<T>, id: string) => void)
    | ((handlers: TableHandlers<T>, state: TableState<T>) => void)
    | undefined;

const handlers = {
    init: <T>(handlers: TableHandlers<T>, state: TableState<T>, service: TableService<T>) => {
        const handler = handlers.onInit;
        handler?.({ state, service });
    },
    update: <T>(handlers: TableHandlers<T>, state: TableState<T>, id: string) => {
        const handler = handlers.onUpdate;
        handler?.(state, id);
    },
    [SortModule.name]: <T>(handlers: TableHandlers<T>, state: TableState<T>) => {
        const handler = handlers.onSort;
        handler?.({ value: state[SortModule.name], event: DEFAULT_EVENT });
    },
    [FilterModule.name]: <T>(handlers: TableHandlers<T>, state: TableState<T>) => {
        const handler = handlers.onFilter;
        handler?.(structuredClone(state[FilterModule.name]));
    },
};

const call = <T>(
    eventId: string,
    config: TableHandlers<T>,
    args: [TableState<T>, TableService<T> | string | undefined]
) => {
    const handler: HandlersType<T> = handlers[eventId];

    if (!handler) {
        return;
    }

    if (args[1]) {
        (handler as (handlers: TableHandlers<T>, state: TableState<T>, service: TableService<T> | string) => void)(
            config,
            args[0],
            args[1]
        );
    } else {
        (handler as (handlers: TableHandlers<T>, state: TableState<T>) => void)(config, args[0]);
    }
};

export const initEvents = <T>(config: TableHandlers<T>): TableEvents<T> => {
    return {
        Init: (service, state) => {
            call('init', config, [state, service]);
        },
        Update: (state, id) => {
            call(id, config, [state, undefined]);
            call('update', config, [state, id]);
        },
    };
};
