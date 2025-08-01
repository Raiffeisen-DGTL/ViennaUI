import { ReactElement, ReactNode } from 'react';
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
    HiddenColumnsState,
} from './components';
import { TableProps } from './Table';
import { SettingsType } from './TableModules';
import { AnyObject } from '../Utils';

export interface TableConfig<T> {
    base: BaseConfig<T>;
    columns: ColumnsConfig<T>;
    footer?: FooterConfig;
    empty?: EmptyConfig;
    expandingRow?: ExpandingRowConfig<T>;
    selectRow?: SelectRowConfig<T>;
    selection?: SelectionConfig;
    columnGroup?: ColumnGroupConfig;
    settings?: SettingsConfig;
    actionsColumn?: ActionsColumnProps<T>;
    groupBy?: GroupByConfig<T>;
}

export interface TableState<T> {
    columns?: ColumnsState<T>;
    expandingRow?: ExpandingRowState;
    sort?: SortState;
    selectRow?: SelectRowState<T>;
    indeterminateRow?: SelectRowState<T>;
    disableCheckbox?: SelectRowState<T>;
    groupBy?: GroupByState;
    filter?: FilterState<T>;
    coloredRows?: ColoredRowsState;
    data?: TableProps<T>['data'];
    visibleRows?: string[];
    allRows?: string[];
    hiddenRows?: string[];
    hiddenColumns?: HiddenColumnsState;
}

export type UpdateTableState<T> = (
    id: string | string[],
    newState: TableState<T> | ((prev: TableState<T>) => TableState<T>)
) => void;

interface ModuleParams<T, C, R> {
    child: R;
    settings: SettingsType<T>;
    config: Partial<C>;
}

export type ModuleName =
    | 'actionsColumn'
    | 'base'
    | 'coloredRows'
    | 'columns'
    | 'columnGroup'
    | 'empty'
    | 'expandingRow'
    | 'groupBy'
    | 'footer'
    | 'filter'
    | 'selectRow'
    | 'settings'
    | 'sort';
export interface Module<C, S, T, R = ReactNode> {
    name: ModuleName | string;
    feature?: TableFeature;
    conditionalFeature?: (params: ModuleParams<T, S, R>) => TableFeature | null;
    initConfig?: (params: ModuleParams<T, C, R>) => C;
    initState?: (params: ModuleParams<T, S, R>) => S;
}

export type TableFeature = 'SelectRow' | 'ExpandingRow' | 'ExpandingGroup' | 'ActionsColumn';

export type TableFeatures = Set<TableFeature>;

export enum SortDirection {
    Asc = 'asc',
    Desc = 'desc',
    None = 'none',
}

export type TableValign = 'baseline' | 'top' | 'middle' | 'bottom' | 'inherit' | 'initial' | 'unset';
export type TableSize = 'xs' | 's' | 'm' | 'l';
export type TableData = AnyObject & { id?: string };

export type TableReactComponent<T = AnyObject> = ReactElement<T> & {
    type: ReactElement['type'] & { displayName: string };
};

export type TableItemGroupByType<T> = T & { groupId?: string };
