import { TableState } from '../../types';

export interface DraggableColumnService {
    moveColumn: (target: string, destination: string) => void;
}

const moveElementInsideArray = <T>(arr: T[], target: number, destination: number) => {
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

    const copy = [...arr];

    const element = copy[target];
    copy.splice(target, 1);
    copy.splice(destination, 0, element);

    return copy;
};

export const draggableColumnServiceId = 'dragColumn';

export const draggableColumnService: <T>(
    getState: () => TableState<T>,
    update: (id: string, newState: TableState<T> | ((prev: TableState<T>) => TableState<T>)) => void
) => DraggableColumnService = (getState, update) => {
    const moveColumn = (target: string, destination: string) => {
        const columns = getState()?.columns?.list ?? [];
        const targetIdx = columns.findIndex((c) => c.id === target);
        const destinationIdx = columns.findIndex((c) => c.id === destination);

        if (targetIdx < 0 || destinationIdx < 0) {
            return;
        }

        const list = moveElementInsideArray(columns, targetIdx, destinationIdx);

        update(draggableColumnServiceId, { ...getState(), columns: { list } });
    };

    return { moveColumn };
};
