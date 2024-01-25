import { Module } from '../../types';
import { ColumnGroupProps } from './ColumnGroup';

export interface ColumnGroupConfig {
    groups: ColumnGroupProps[];
}

export const ColumnGroupModule: Module = {
    name: 'columnGroup',
    initConfig: ({ settings, child, config }): ColumnGroupConfig => {
        const { title, id, color, pinned } = child.props;
        const { columns } = settings;

        const groups: ColumnGroupProps[] = config?.groups ?? [];
        groups.push({ id, title, columns, color, pinned });

        return { groups };
    },
};
