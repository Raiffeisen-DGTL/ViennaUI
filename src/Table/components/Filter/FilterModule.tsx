import { Module, TableData } from '../../types';
import { ColumnProps } from '../Column';
import { AnyObject } from '../../../Utils';

export type FilterState<T> = AnyObject | ColumnProps<T>['filter'];

export const FilterModule: Module<undefined, FilterState<TableData>, TableData> = {
    name: 'filter',
    initState: ({ settings }): FilterState<TableData> => {
        return settings.filter;
    },
};
