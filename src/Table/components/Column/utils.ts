import { ColumnProps } from './Column';

export const getFirstUnpinnedIndex = <T>(columns: ColumnProps<T>[]) => {
    const index = columns.findIndex((item) => !item.pinned);

    return index !== -1 ? index : columns.length;
};
