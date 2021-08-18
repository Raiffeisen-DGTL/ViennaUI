import { ServiceFactory } from '../TableService/ServiceFactory';
import { FilterModule, FilterState } from './FilterModule';

export interface FilterService {
    getFilter: () => FilterState | undefined;
    getFilterColumn: (id) => any;
    setFilter: (id, value) => void;
}

export const filterService: ServiceFactory<FilterService> = function (getState, updateState) {
    const getFilter = () => {
        return getState().filter;
    };
    const getFilterColumn = (id) => {
        return getState().filter?.[id];
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
