import { Module } from '../../types';

export type FilterState = Record<string, any>;

export const FilterModule: Module = {
    name: 'filter',
    initState: ({ settings }): FilterState => {
        return settings.filter;
    },
};
