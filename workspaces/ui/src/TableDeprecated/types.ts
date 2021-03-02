import {
    BaseConfig,
    ColumnsConfig,
    ColumnsState,
    ColumnService,
    FooterConfig,
    EmptyConfig,
    ExpandingRowConfig,
    ExpandingRowState,
    ExpandingRowService,
    ResizableColumnService,
    SortState,
    SortService,
    SelectRowConfig,
    SelectRowState,
    SelectRowService,
    FilterState,
    FilterService,
    DraggableColumnService,
    ColumnGroupConfig,
    ColumnGroupService,
    GroupByConfig,
    GroupByState,
    GroupByService,
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

export type TableServiceFactory<T> = (state: TableState, update: UpdateTableState, data?: any[]) => T;
export type TableServiceFactoryConfig<T> = (
    state: TableState,
    update: UpdateTableState,
    config: TableConfig,
    data?: any[]
) => T;

export type TableService = ColumnService &
    ExpandingRowService &
    ResizableColumnService &
    SortService &
    SelectRowService &
    DraggableColumnService &
    ColumnGroupService &
    GroupByService &
    FilterService;

export interface TableContext {
    service: TableService;
    config: TableConfig;
}

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
