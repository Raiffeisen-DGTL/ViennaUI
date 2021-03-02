import { TableServiceFactory } from '../../types';

export interface ResizableColumnService {
    setColumnWidth: (id, width) => void;
}

export const resizableColumnServiceId = 'resizeColumn';

export const resizableColumnService: TableServiceFactory<ResizableColumnService> = function (state, updateState) {
    const setColumnWidth = (id: string, width: string) => {
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
