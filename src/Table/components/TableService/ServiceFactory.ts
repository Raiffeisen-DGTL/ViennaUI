import { TableState, UpdateTableState, TableConfig, TableData } from '../../types';

export type ServiceFactory<T> = (
    getState: () => TableState<TableData>,
    update: UpdateTableState<T>,
    getData?: () => T[],
    config?: TableConfig<T>
) => T;

export type ServiceFactoryConfig<T> = (
    getState: () => TableState<TableData>,
    update: UpdateTableState<T>,
    config: TableConfig<TableData>,
    getData?: () => T[]
) => TableData;
