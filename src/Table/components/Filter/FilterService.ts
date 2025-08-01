// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FilterModule, FilterState } from './FilterModule';
import { TableState } from '../../types';

export interface FilterService<T> {
    getFilter: () => FilterState<T> | undefined;
    getFilterColumn: (id: string) => unknown;
    setFilter: <K>(id: string, value: K) => void;
}

export const filterService = <T>(
    getState: () => TableState<T>,
    updateState: (id: string, newState: TableState<T> | ((prev: TableState<T>) => TableState<T>)) => void
): FilterService<T> => {
    const getFilter = () => {
        return getState().filter;
    };
    const getFilterColumn = (id: string) => {
        return getState().filter?.[id];
    };

    const setFilter = <T>(id: string, value: T) => {
        updateState(FilterModule.name, (prev) => {
            const filter = prev.filter ?? {};
            filter[id] = value;

            return { ...prev, filter };
        });
    };

    return { getFilter, getFilterColumn, setFilter };
};
