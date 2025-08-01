/* eslint-disable @typescript-eslint/ban-types */
import { ReactNode, ReactElement } from 'react';
import { Module, TableData } from '../../types';
import { ColumnProps } from './Column';

export interface ColumnsConfig<T> {
    templates: Map<string, (item: T, rowIndex: number) => ReactNode>;
    filters?: Map<string, Function>;
}

export interface ColumnsState<T> {
    list: ColumnProps<T>[];
}

export const ColumnsModule: Module<ColumnsConfig<TableData>, ColumnsState<TableData>, TableData> = {
    name: 'columns',
    initConfig: ({ child, config }): ColumnsConfig<TableData> => {
        const { id, filter, children } = (child as ReactElement<ColumnProps<TableData>>).props;

        const columnsMap = config?.templates ?? new Map();
        columnsMap.set(id, children);

        const filterMap = config?.filters ?? new Map();
        if (filter) {
            filterMap.set(id, filter);
        }

        return {
            templates: columnsMap,
            filters: filterMap,
        };
    },

    initState: ({ child, config, settings }): ColumnsState<TableData> => {
        const { id, filter, ...attrs } = (child as ReactElement<ColumnProps<TableData>>).props;
        const { groupId } = settings;
        const isFilter = Boolean(filter);

        const columns = config?.list ?? [];
        columns.push({ id, filter: isFilter, ...attrs, groupId });

        return {
            list: columns,
        };
    },
};
