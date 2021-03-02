import { TableServiceFactory, SortDirection } from '../../types';
import { SortState, SortModule } from './SortModule';

export interface SortService {
    getSortColumn: () => SortState | undefined;
    setSortColumn: (id: any, direction: SortDirection) => void;
}

export const sortService: TableServiceFactory<SortService> = function (getState, updateState) {
    const getSortColumn = () => {
        return getState().sort;
    };

    const setSortColumn = (field, direction: SortDirection) => {
        const state = getState();
        const sort = {
            field,
            direction,
        };

        updateState(SortModule.name, { ...state, sort });
    };

    return { getSortColumn, setSortColumn };
};
