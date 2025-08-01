import { Module, TableData } from '../../types';

type RowColor = 'geneva10' | 'moscow10' | 'osaka10' | 'seattle05' | 'seattle10';

export interface ColoredRowsStateItem {
    id: string;
    color: RowColor | string;
}

export type ColoredRowsState = ColoredRowsStateItem[];

export const ColoredRowsModule: Module<undefined, ColoredRowsState | undefined, TableData> = {
    name: 'coloredRows',
    initState: ({ settings }): ColoredRowsState | undefined => {
        return settings.coloredRows;
    },
};
