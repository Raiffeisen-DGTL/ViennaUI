import { isValidElement, ReactElement } from 'react';
import { Module, TableData } from '../../types';
import { ColumnGroupProps } from './ColumnGroup';

export interface ColumnGroupConfig {
    groups: ColumnGroupProps[];
}

export const ColumnGroupModule: Module<ColumnGroupConfig, undefined, TableData> = {
    name: 'columnGroup',
    initConfig: ({ settings, child, config }): ColumnGroupConfig => {
        const { title, id, color, pinned } =
            (isValidElement(child) && (child as ReactElement<ColumnGroupProps>).props) || {};
        const { columns } = settings;

        const groups: ColumnGroupProps[] = config?.groups ?? [];
        if (id) {
            groups.push({ id, title, columns, color, pinned });
        }

        return { groups };
    },
};
