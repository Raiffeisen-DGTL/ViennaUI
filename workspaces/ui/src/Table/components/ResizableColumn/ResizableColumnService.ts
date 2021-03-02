import { TableServiceFactory } from '../../types';

export interface ResizableColumnService {
    setColumnWidth: (id, width) => void;
}

export const resizableColumnServiceId = 'resizeColumn';

export const resizableColumnService: TableServiceFactory<ResizableColumnService> = function (getState, updateState) {
    const setColumnWidth = (id: string, width: string) => {
        const state = getState();
        const list =
            state?.columns?.list?.map((column) => {
                if (column.id === id) {
                    column.width = width;
                }

                return column;
            }) ?? [];

        updateState(resizableColumnServiceId, { ...state, columns: { list } });
    };

    return { setColumnWidth };
};
