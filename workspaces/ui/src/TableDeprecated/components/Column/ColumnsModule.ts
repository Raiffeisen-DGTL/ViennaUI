import { Module } from '../../types';
import { ColumnProps } from './Column';

export interface ColumnsConfig {
    templates: Map<string, Function>;
}

export interface ColumnsState {
    list: ColumnProps[];
}

export const ColumnsModule: Module = {
    name: 'columns',
    initConfig: ({ child, config }): ColumnsConfig => {
        const { id, children } = child.props;

        const columnsMap = config?.templates ?? new Map();
        columnsMap.set(id, children);

        return {
            templates: columnsMap,
        };
    },

    initState: ({ child, config, settings }): ColumnsState => {
        const { id, ...attrs } = child.props;
        const { groupId } = settings;

        const columns = config?.list ?? [];
        columns.push({ id, ...attrs, groupId });

        return {
            list: columns,
        };
    },
};
