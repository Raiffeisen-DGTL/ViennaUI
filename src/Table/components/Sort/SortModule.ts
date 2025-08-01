import { Module, SortDirection, TableData } from '../../types';

export interface SortState {
    field: string;
    direction: SortDirection;
}

export const SortModule: Module<undefined, SortState | undefined, TableData> = {
    name: 'sort',
    initState: ({ settings }): SortState | undefined => {
        return settings.sort;
    },
};
