import { Module, SortDirection } from '../../types';

export interface SortState {
    field: string;
    direction: SortDirection;
}

export const SortModule: Module = {
    name: 'sort',
    initState: ({ settings }): SortState => {
        return settings.sort;
    },
};
