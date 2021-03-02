import { TableServiceFactory, SortDirection } from '../../types';
import { SortState, SortModule } from './SortModule';

export interface SortService {
    getSortColumn: () => SortState | undefined;
    setSortColumn: (id: any, direction: SortDirection) => void;
}

export const sortService: TableServiceFactory<SortService> = function (state, updateState) {
    const getSortColumn = () => {
        return state.sort;
    };

    const setSortColumn = (field, direction: SortDirection) => {
        const sort = {
            field,
            direction,
        };

        updateState(SortModule.name, { ...state, sort });
    };

    return { getSortColumn, setSortColumn };
};
