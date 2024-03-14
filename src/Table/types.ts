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
    SelectionConfig,
    FilterState,
    ColumnGroupConfig,
    GroupByConfig,
    GroupByState,
    SettingsConfig,
    ActionsColumnProps,
    ColoredRowsState,
} from './components';

export interface TableConfig {
    base: BaseConfig;
    columns: ColumnsConfig;
    footer?: FooterConfig;
    empty?: EmptyConfig;
    expandingRow?: ExpandingRowConfig;
    selectRow?: SelectRowConfig;
    selection?: SelectionConfig;
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
    coloredRows?: ColoredRowsState;
}

export type UpdateTableState = (id: string, newState: TableState | ((prev: TableState) => TableState)) => void;

export interface Module<C = any, S = any> {
    name: string;
    feature?: TableFeature;
    initConfig?: (params) => C;
    initState?: (params) => S;
}

export type TableFeature = 'SelectRow' | 'ExpandingRow' | 'ActionsColumn';

export type TableFeatures = Set<TableFeature>;

export enum SortDirection {
    Asc = 'asc',
    Desc = 'desc',
}
