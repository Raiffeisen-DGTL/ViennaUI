import { ViewMode } from '../../types';

export const getGridSize = (viewMode: ViewMode) => {
    const gridSize = viewMode === 'month' ? [5, 7] : [4, 3];

    const rowLength = gridSize[1];
    const columnLength = gridSize[0];

    return {
        gridSize,
        rowLength,
        columnLength,
    };
};
