import { TableState } from '../../types';
import { ColumnProps } from '../Column';

export interface BaseService {
    allColumns: () => ColumnProps[];
    columns: () => ColumnProps[];
    colSpan: () => number;
    hideColumn: (id) => void;
    showColumn: (id) => void;
    hideAllColumns: () => void;
    showAllColumns: () => void;
}

export const baseService = function (state: TableState, update): BaseService {
    const allColumns = function () {
        return state?.columns?.list ?? [];
    };

    const columns = function () {
        const columns = state?.columns?.list?.filter((c) => !c.hidden);
        return columns ?? [];
    };

    const colSpan = function () {
        return columns().length + 2;
    };

    const hideColumn = function (id) {
        const list = state?.columns?.list?.map((column) => {
            if (column.id === id) {
                column.hidden = true;
            }

            return column;
        });

        update({ ...state, columns: { list } });
    };

    const showColumn = function (id) {
        const list = state?.columns?.list?.map((column) => {
            if (column.id === id) {
                column.hidden = false;
            }

            return column;
        });

        update({ ...state, columns: { list } });
    };

    const hideAllColumns = function () {
        const list = state?.columns?.list?.map((column) => {
            column.hidden = true;
            return column;
        });

        update({ ...state, columns: { list } });
    };

    const showAllColumns = function () {
        const list = state?.columns?.list?.map((column) => {
            column.hidden = false;
            return column;
        });

        update({ ...state, columns: { list } });
    };

    return { allColumns, columns, colSpan, hideColumn, showColumn, hideAllColumns, showAllColumns };
};
