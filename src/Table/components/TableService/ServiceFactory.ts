import { TableState, UpdateTableState, TableConfig } from '../../types';

export type ServiceFactory<T> = (getState: () => TableState, update: UpdateTableState, getData?: () => any[]) => T;

export type ServiceFactoryConfig<T> = (
    getState: () => TableState,
    update: UpdateTableState,
    config: TableConfig,
    getData?: () => any[]
) => T;
