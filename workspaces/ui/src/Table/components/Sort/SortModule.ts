import { Module } from '../../types';
import { TableProps } from '../../Table';

export interface SortConfig {
    onSort: TableProps['onSort'];
}

export interface SortState {
    field: string;
    direction: 'asc' | 'desc';
}

export const SortModule: Module = {
    name: 'sort',
    initConfig: ({ settings }): SortConfig => {
        return {
            onSort: settings.onSort,
        };
    },
};
