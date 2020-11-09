import { TableState } from '../../types';
import { SortState } from './SortModule';

export interface SortService {
    getSortColumn: () => SortState | undefined;
    setSortColumn: (id, direction) => void;
}

export function sortService(state: TableState, updateState: any): SortService {
    const getSortColumn = () => {
        return state.sort;
    };

    const setSortColumn = (field, direction) => {
        const sort = {
            field,
            direction,
        };

        updateState({ ...state, sort });
    };

    return { getSortColumn, setSortColumn };
}
