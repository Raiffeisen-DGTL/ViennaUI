import { TableServiceFactory } from '../../types';
import { FilterModule, FilterState } from './FilterModule';

export interface FilterService {
    getFilter: () => FilterState | undefined;
    getFilterColumn: (id) => any;
    setFilter: (id, value) => void;
}

export const filterService: TableServiceFactory<FilterService> = function (state, updateState) {
    const getFilter = () => {
        return state.filter;
    };
    const getFilterColumn = (id) => {
        return state.filter?.[id];
    };

    const setFilter = (id, value) => {
        updateState(FilterModule.name, (prev) => {
            const filter = prev.filter ?? {};
            filter[id] = value;

            return { ...prev, filter };
        });
    };

    return { getFilter, getFilterColumn, setFilter };
};
