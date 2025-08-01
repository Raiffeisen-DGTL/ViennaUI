import { ColumnProps } from '.';
import { getFirstUnpinnedIndex } from './utils';
import { TableState } from '../../types';
import { TableProps } from '../../Table';
import { HiddenColumnsState } from '../Settings';

export interface AugmentedColumn<T> extends ColumnProps<T> {
    /* Позиция колонки до закрепления */
    unpinnedIndex?: number;
}

export interface ColumnService<T> {
    allColumns: () => AugmentedColumn<T>[];
    columns: () => AugmentedColumn<T>[];
    getHiddenColumns: () => HiddenColumnsState;
    colSpan: () => number;
    hideColumn: (id: ReturnType<Required<TableProps>['dataKey']>) => void;
    showColumn: (id: ReturnType<Required<TableProps>['dataKey']>) => void;
    hideAllColumns: () => void;
    showAllColumns: () => void;
    togglePinnedColumn: (id: string) => void;
    columnsOffsets: () => Map<string, number>;
}

export const columnServiceId = 'columns';

export const columnService = <T>(
    getState: () => TableState<T>,
    update: (id: string, newState: TableState<T> | ((prev: TableState<T>) => TableState<T>)) => void
): ColumnService<T> => {
    const allColumns: ColumnService<T>['allColumns'] = () => {
        return getState()?.columns?.list ?? [];
    };

    const getHiddenColumns = (prev?: TableState<T>): HiddenColumnsState => {
        const state = prev ?? getState();
        const hiddenColumns = state.hiddenColumns;

        if (hiddenColumns) return hiddenColumns;

        const isAllShown = state.columns ? !state.columns?.list.some((c) => c.hidden) : true;

        return {
            hiddenColumns: state.columns?.list.filter((c) => c.hidden).map((c) => c.id) ?? [],
            isDirty: false,
            isAllShown,
        };
    };

    const columns: ColumnService<T>['columns'] = () => {
        return allColumns().filter((c) => {
            const state = getHiddenColumns();

            return state.isDirty ? !state.hiddenColumns.includes(c.id) : !c.hidden;
        });
    };

    const colSpan: ColumnService<T>['colSpan'] = () => {
        return columns().length + 2;
    };

    const hideColumn: ColumnService<T>['hideColumn'] = (id) => {
        update(columnServiceId, (prev) => {
            const { hiddenColumns } = getHiddenColumns(prev);

            const newValue = structuredClone(hiddenColumns);

            if (!hiddenColumns.includes(id)) newValue.push(id);

            return {
                ...prev,
                hiddenColumns: {
                    hiddenColumns: newValue,
                    isDirty: true,
                    isAllShown: !newValue.length,
                },
            };
        });
    };

    const showColumn: ColumnService<T>['showColumn'] = (id) => {
        update(columnServiceId, (prev) => {
            const { hiddenColumns } = getHiddenColumns(prev);

            const newValue = hiddenColumns.filter((c) => c !== id);

            return {
                ...prev,
                hiddenColumns: {
                    hiddenColumns: newValue,
                    isDirty: true,
                    isAllShown: !newValue.length,
                },
            };
        });
    };

    const hideAllColumns: ColumnService<T>['hideAllColumns'] = () => {
        update(columnServiceId, (prev) => ({
            ...prev,
            hiddenColumns: { hiddenColumns: allColumns().map((c) => c.id), isDirty: true, isAllShown: false },
        }));
    };

    const showAllColumns: ColumnService<T>['showAllColumns'] = () => {
        update(columnServiceId, (prev) => ({
            ...prev,
            hiddenColumns: { hiddenColumns: [], isDirty: true, isAllShown: true },
        }));
    };

    const togglePinnedColumn: ColumnService<T>['togglePinnedColumn'] = (id) => {
        const list = [...allColumns()];
        const toggledIndex = allColumns().findIndex((item) => item.id === id);
        const toggledColumn = allColumns()[toggledIndex];

        // индекс первой незакрепленной колонки
        const firstUnpinnedIndex = getFirstUnpinnedIndex(list);

        // позиция до закрепления
        const unpinnedIndex = list.reduce((acc, item) => {
            // смещение за каждый закрепленный элемент, который до закрепления стоял правее выбранного
            if ((item?.unpinnedIndex ?? 0) >= acc && item.pinned && item.id !== toggledColumn.id) {
                return toggledColumn.pinned ? acc + 1 : acc - 1;
            }

            return acc;
        }, toggledColumn?.unpinnedIndex ?? toggledIndex);

        if (toggledColumn.pinned) {
            // колонка возвращается на прежнее место
            list.splice(toggledIndex, 1);
            list.splice(unpinnedIndex, 0, { ...toggledColumn, pinned: false });
        } else {
            // колонка закрепляется после последней закрепленной
            list.splice(toggledIndex, 1);
            list.splice(firstUnpinnedIndex, 0, { ...toggledColumn, pinned: true, unpinnedIndex });
        }

        update(columnServiceId, { ...getState(), columns: { list } });
    };

    const columnsOffsetsMap = new Map();

    const columnsOffsets: ColumnService<T>['columnsOffsets'] = () => columnsOffsetsMap;

    return {
        allColumns,
        columns,
        getHiddenColumns,
        colSpan,
        hideColumn,
        showColumn,
        hideAllColumns,
        showAllColumns,
        togglePinnedColumn,
        columnsOffsets,
    };
};
