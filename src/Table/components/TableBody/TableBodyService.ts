import { TableState } from '../../types';

export interface TableBodyService {
    setVisibleRows: (rowIds: string[]) => void;
    setAllRows: (rowIds: string[]) => void;
}

export const tableBodyService: <T>(
    getState: () => TableState<T>,
    update: (id: string, newState: TableState<T> | ((prev: TableState<T>) => TableState<T>)) => void
) => TableBodyService = (getState, updateState) => {
    const setVisibleRows = (visibleRows: string[]) => {
        const state = getState();
        updateState('tableBody', {
            ...state,
            visibleRows,
        });
    };

    const setAllRows = (allRows: string[]) => {
        const state = getState();
        updateState('tableBody', {
            ...state,
            allRows,
        });
    };

    return { setVisibleRows, setAllRows };
};
