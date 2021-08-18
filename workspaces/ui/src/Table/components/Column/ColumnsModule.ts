import { Module } from '../../types';
import { ColumnProps } from './Column';

export interface ColumnsConfig {
    templates: Map<string, Function>;
    filters?: Map<string, Function>;
}

export interface ColumnsState {
    list: ColumnProps[];
}

export const ColumnsModule: Module = {
    name: 'columns',
    initConfig: ({ child, config }): ColumnsConfig => {
        const { id, filter, children } = child.props;

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

    initState: ({ child, config, settings }): ColumnsState => {
        const { id, filter, ...attrs } = child.props;
        const { groupId } = settings;
        const isFilter = Boolean(filter);

        const columns = config?.list ?? [];
        columns.push({ id, filter: isFilter, ...attrs, groupId });

        return {
            list: columns,
        };
    },
};
