import { TableState } from '../../types';

export interface ResizableColumnService {
    setColumnWidth: (id, width) => void;
}

export function resizableColumnService(state: TableState, updateState: any): ResizableColumnService {
    const setColumnWidth = (id: string, width: string) => {
        const list = state?.columns?.list?.map((column) => {
            if (column.id === id) {
                column.width = width;
            }

            return column;
        });

        updateState({ ...state, columns: { list } });
    };

    return { setColumnWidth };
}
