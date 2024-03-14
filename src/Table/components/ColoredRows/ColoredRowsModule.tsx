import { Module } from '../../types';

export interface ColoredRowsStateItem {
    id: string;
    color: string;
}

export type ColoredRowsState = ColoredRowsStateItem[];

export const ColoredRowsModule: Module = {
    name: 'coloredRows',
    initState: ({ settings }): ColoredRowsState => {
        return settings.coloredRows;
    },
};
