import { SortDirection } from '../../types';
import { ServiceFactory } from '../TableService/ServiceFactory';
import { SortState, SortModule } from './SortModule';

export interface SortService {
    getSortColumn: () => SortState | undefined;
    setSortColumn: (id: any, direction: SortDirection) => void;
}

export const sortService: ServiceFactory<SortService> = function (getState, updateState) {
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
