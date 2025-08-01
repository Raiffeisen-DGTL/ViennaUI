// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { ReactNode, isValidElement, ReactElement } from 'react';
import { TableConfig, TableState, TableFeature, TableFeatures, TableReactComponent, TableData, Module } from './types';
import {
    BaseModule,
    ColumnsModule,
    FooterModule,
    EmptyModule,
    ExpandingRowModule,
    SelectRowModule,
    SelectionModule,
    ColumnGroupModule,
    GroupByModule,
    SettingsModule,
    ActionsColumnModule,
    SortModule,
    FilterModule,
    ColoredRowsModule,
    Column,
    ColumnProps,
    ColumnGroupProps,
    SortState,
    ColoredRowsState,
    SelectRowConfig,
    SelectRowState,
    BaseConfig,
    FilterState,
    ColumnGroupConfig,
    ColumnsConfig,
    ColumnsState,
} from './components';
import { TableProps } from './Table';
import { isProperKey } from '../Utils';

const component2Module = {
    Column: ColumnsModule,
    EmptyState: EmptyModule,
    Footer: FooterModule,
    ExpandingRow: ExpandingRowModule,
    SelectAll: SelectRowModule,
    Selection: SelectionModule,
    ColumnGroup: ColumnGroupModule,
    GroupBy: GroupByModule,
    Settings: SettingsModule,
    ActionsColumn: ActionsColumnModule,
    ColoredRows: ColoredRowsModule,
};

interface InitModulesParams<T> {
    initState: TableProps<T>['initState'];
    children: ReactNode;
    columns: TableProps<T>['columns'];
    settings: Pick<
        TableProps<T>,
        | 'maxHeight'
        | 'size'
        | 'valign'
        | 'noHeader'
        | 'noRowDivider'
        | 'expandedRow'
        | 'onExpand'
        | 'onRowClick'
        | 'onRowDoubleClick'
        | 'onRowRightClick'
        | 'selected'
        | 'indeterminate'
        | 'indeterminated'
        | 'disableSelectAll'
        | 'disableCheckboxSelectAll'
        | 'disableCheckboxes'
        | 'onSelect'
        | 'pinnableColumns'
        | 'sort'
        | 'filter'
        | 'disableCheckboxRow'
        | 'dataKey'
    > & { isOuterSortable: boolean };
}

export type SettingsType<T> = (Partial<Omit<InitModulesParams<T>['settings'], 'filter'>> & {
    outlined?: boolean;
    columns?: string[];
    disabled?: T[];
    sort?: SortState;
    coloredRows?: ColoredRowsState;
    filter?: InitModulesParams<T>['settings']['filter'];
    isOuterSortable?: boolean;
}) &
    Omit<Partial<ColumnProps<T>>, 'filter'>;

const initModule = <C, S, T>(
    module: Module<C, S, T>,
    child: ReactNode,
    settings: SettingsType<T>,
    config: TableConfig<T>,
    state: TableState<T>,
    features: TableFeatures
) => {
    if (module.initConfig) {
        config[module.name] = module.initConfig({ child, settings, config: config[module.name] });
    }

    if (module.initState) {
        state[module.name] = module.initState({ child, settings, config: state[module.name] });
    }

    if (module.feature) {
        features.add(module.feature);
    }

    if (module.conditionalFeature) {
        const resultFeature = module.conditionalFeature({ child, settings, config: state[module.name] });

        if (resultFeature) {
            features.add(resultFeature);
        }
    }
};

const getModule = (child: TableReactComponent) => {
    if (!child?.type?.displayName || !isProperKey(component2Module, child.type.displayName)) {
        // eslint-disable-next-line no-console
        console.warn(`Unrecognized table component: ${child?.type}`);
        return undefined;
    }

    return component2Module[child.type.displayName];
};

export function initModules<T>(params: InitModulesParams<T>): {
    config: TableConfig<T>;
    state: TableState<T>;
    features: TableFeatures;
} {
    const { children: paramsChildren, columns, settings, initState } = params;
    const columnsAsNode = columns?.map((el) => <Column key={el.id} {...el} />);

    const children = columnsAsNode || paramsChildren;

    const config = {} as TableConfig<T>;
    const state = {} as TableState<T>;
    const features: TableFeatures = new Set<TableFeature>();

    const outlined = (React.Children.toArray(children) as TableReactComponent[]).some(
        (child) => child?.type?.displayName === 'ColumnGroup'
    );
    initModule(
        BaseModule as Module<BaseConfig<T>, undefined, T>,
        null,
        { ...settings, outlined },
        config,
        state,
        features
    );

    if (settings.onSelect) {
        initModule(
            SelectRowModule as Module<SelectRowConfig<T>, SelectRowState<T>, T>,
            null,
            settings,
            config,
            state,
            features
        );
    }

    if (settings.sort) {
        initModule(SortModule as Module<undefined, SortState | undefined, T>, null, settings, config, state, features);
    }

    if (settings.filter) {
        initModule(FilterModule as Module<undefined, FilterState<T>, T>, null, settings, config, state, features);
    }

    // // if children wrapped up in React.Fragment extract them out
    const list: ReactNode =
        isValidElement(children) && children.type === React.Fragment
            ? (children as ReactElement<{ children: React.ReactNode }>).props.children
            : children;

    React.Children.forEach(React.Children.toArray(list) as TableReactComponent[], (child: TableReactComponent) => {
        const module: Module<ColumnGroupConfig, undefined, T> | undefined = getModule(child);
        if (!child.type || !module) {
            return;
        }

        if (
            child.type.displayName === 'ColumnGroup' &&
            React.Children.count((child as ReactElement<ColumnGroupProps>).props.children) !== 0
        ) {
            const columnGroup: ReactElement<ColumnGroupProps> = child;
            const groupId = columnGroup.props.id;
            const columns: ColumnProps<TableData>['id'][] = [];

            React.Children.forEach(
                React.Children.toArray(columnGroup.props.children) as TableReactComponent[],
                (subChild: TableReactComponent) => {
                    const subChildModule: Module<ColumnsConfig<T>, ColumnsState<T>, T> = getModule(subChild);
                    if (!subChildModule || subChild.type.displayName !== 'Column') {
                        return;
                    }
                    const column: TableReactComponent<ColumnProps<T>> = subChild;

                    columns.push(column.props.id);

                    initModule(subChildModule, subChild, { ...column.props, groupId }, config, state, features);
                }
            );

            initModule(module, child, { columns }, config, state, features);

            return;
        }

        initModule(module, child, settings, config, state, features);
    });

    const resultedState = initState
        ? typeof initState === 'function'
            ? initState(state)
            : { ...state, ...initState }
        : state;
    return { config, state: resultedState, features };
}
