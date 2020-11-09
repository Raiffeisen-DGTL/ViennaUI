import {
    BaseConfig,
    BaseService,
    ColumnsConfig,
    ColumnsState,
    FooterConfig,
    EmptyConfig,
    ExpandingRowConfig,
    ExpandingRowState,
    ExpandingRowService,
    ResizableColumnService,
    SortConfig,
    SortState,
    SortService,
    SelectRowConfig,
    SelectRowState,
    SelectRowService,
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
    sort?: SortConfig;
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
}

export type TableService = BaseService &
    ExpandingRowService &
    ResizableColumnService &
    SortService &
    SelectRowService &
    DraggableColumnService &
    ColumnGroupService &
    GroupByService;

export enum Modules {
    Base = 'base',
    Column = 'column',
    Footer = 'footer',
    Empty = 'empty',
    ExpandingRow = 'expandingRow',
    ColumnGroup = 'columnGroup',
}

export interface Module {
    name: string;
    initConfig?: (params) => any;
    initState?: (params) => any;
}
