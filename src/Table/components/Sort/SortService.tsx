import { SortDirection, TableState } from '../../types';
import { SortState, SortModule } from './SortModule';
import { TableProps } from '../..';

export interface SortService<T> {
    getSortColumn: () => SortState | undefined;
    setSortColumn: (field: string, direction: SortDirection, onSort?: TableProps<T>['onSort']) => void;
    resetSort: () => void;
}

export const sortService: <T>(
    getState: () => TableState<T>,
    update: (id: string, newState: TableState<T> | ((prev: TableState<T>) => TableState<T>)) => void,
    getData?: () => T[]
) => SortService<T> = function (getState, updateState) {
    const getSortColumn = () => {
        return getState().sort;
    };

    const setSortColumn = (field: string, direction: SortDirection) => {
        const state = getState();

        const sort = {
            field,
            direction,
        };

        updateState(SortModule.name, { ...state, sort });
    };

    const resetSort = () => {
        const state = getState();
        if (state.sort) {
            const sort = {
                field: state.sort.field,
                direction: SortDirection.None,
            };
            updateState(SortModule.name, { ...state, sort });
        }
    };

    return { getSortColumn, setSortColumn, resetSort };
};
