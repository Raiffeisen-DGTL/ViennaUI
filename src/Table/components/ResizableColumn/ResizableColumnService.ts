import { TableState } from '../../types';

export interface ResizableColumnService {
    setColumnWidth: (id: string, width: string) => void;
}

export const resizableColumnServiceId = 'resizeColumn';

export const resizableColumnService: <T>(
    getState: () => TableState<T>,
    update: (id: string, newState: TableState<T> | ((prev: TableState<T>) => TableState<T>)) => void
) => ResizableColumnService = (getState, updateState) => {
    const setColumnWidth = (id: string, width: string) => {
        const list =
            getState()?.columns?.list?.map((column) => {
                if (
                    column.id === id &&
                    (!column.minWidth || Number(column.minWidth.slice(0, -2)) <= Number(width.slice(0, -2)))
                ) {
                    column.width = width;
                }

                return column;
            }) ?? [];

        updateState(resizableColumnServiceId, { ...getState(), columns: { list } });
    };

    return { setColumnWidth };
};
