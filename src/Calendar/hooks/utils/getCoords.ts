import { getGridSize } from './getGridSize';
import { ViewMode } from '../../types';

interface Props {
    index: number;
    viewMode: ViewMode;
    lastIndex: number;
}

export const getCoords = ({ index, lastIndex, viewMode }: Props) => {
    const { rowLength, columnLength } = getGridSize(viewMode);

    return {
        isFirstRow: index - rowLength <= 0,
        isFirstColumn: index === 0,
        isLastRow: lastIndex - index < rowLength,
        isLastColumn: index === lastIndex,
        columnLength,
        rowLength,
    };
};
