import { TableServiceFactory } from '../../types';

export interface DraggableColumnService {
    moveColumn: (target: string, destination: string) => void;
}

function moveElelementInsideArray(arr: any[], target: number, destination: number) {
    // If any of indexes is incorrect return the original array
    if (
        target < 0 ||
        destination < 0 ||
        target >= arr.length ||
        destination >= arr.length ||
        arr[target] === undefined ||
        arr[destination] === undefined
    ) {
        return arr;
    }

    const element = arr[target];
    arr.splice(target, 1);
    arr.splice(destination, 0, element);

    return arr;
}

export const draggableColumnServiceId = 'dragColumn';

export const draggableColumnService: TableServiceFactory<DraggableColumnService> = (getState, update) => {
    const moveColumn = (target: string, destination: string) => {
        const state = getState();

        const columns = state?.columns?.list ?? [];
        const tragetIdx = columns.findIndex((c) => c.id === target);
        const destinationIdx = columns.findIndex((c) => c.id === destination);

        if (tragetIdx < 0 || destinationIdx < 0) {
            return;
        }

        const list = moveElelementInsideArray(columns, tragetIdx, destinationIdx);

        update(draggableColumnServiceId, { ...state, columns: { list } });
    };

    return { moveColumn };
};
