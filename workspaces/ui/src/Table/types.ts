import {
    BaseConfig,
    ColumnsConfig,
    ColumnsState,
    FooterConfig,
    EmptyConfig,
    ExpandingRowConfig,
    ExpandingRowState,
    SortState,
    SelectRowConfig,
    SelectRowState,
    FilterState,
    ColumnGroupConfig,
    GroupByConfig,
    GroupByState,
    SettingsConfig,
    ActionsColumnProps,
} from './components';

export interface TableConfig {
    base: BaseConfig;
    columns: ColumnsConfig;
    footer?: FooterConfig;
    empty?: EmptyConfig;
    expandingRow?: ExpandingRowConfig;
    selectRow?: SelectRowConfig;
    columnGroup?: ColumnGroupConfig;
    settings?: SettingsConfig;
    actionsColumn?: ActionsColumnProps;
    groupBy?: GroupByConfig;
}

export interface TableState {
    columns?: ColumnsState;
    expandingRow?: ExpandingRowState;
    sort?: SortState;
    selectRow?: SelectRowState;
    groupBy?: GroupByState;
    filter?: FilterState;
}

export type UpdateTableState = (id: string, newState: TableState | ((prev: TableState) => TableState)) => void;

export type TableServiceRoot<T> = (state: TableState, update: UpdateTableState, config: TableConfig, data: any[]) => T;

export type TableServiceFactory<T> = (getState: () => TableState, update: UpdateTableState, getData?: () => any[]) => T;
export type TableServiceFactoryConfig<T> = (
    getState: () => TableState,
    update: UpdateTableState,
    config: TableConfig,
    getData?: () => any[]
) => T;

export interface Module {
    name: string;
    feature?: TableFeature;
    initConfig?: (params) => any;
    initState?: (params) => any;
}

export enum TableFeature {
    SelectRow = 'SelectRow',
    ExpandingRow = 'ExpandingRow',
}

export type TableFeatures = Set<TableFeature>;

export enum SortDirection {
    Asc = 'asc',
    Desc = 'desc',
}
