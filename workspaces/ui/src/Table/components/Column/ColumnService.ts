import { ServiceFactory } from '../TableService/ServiceFactory';
import { ColumnProps } from '.';

export interface ColumnService {
    allColumns: () => ColumnProps[];
    columns: () => ColumnProps[];
    colSpan: () => number;
    hideColumn: (id) => void;
    showColumn: (id) => void;
    hideAllColumns: () => void;
    showAllColumns: () => void;
}

export const columnServiceId = 'columns';

export const columnService: ServiceFactory<ColumnService> = function (getState, update) {
    const allColumns = function () {
        return getState()?.columns?.list ?? [];
    };

    const columns = function () {
        const columns = getState()?.columns?.list?.filter((c) => !c.hidden);
        return columns ?? [];
    };

    const colSpan = function () {
        return columns().length + 2;
    };

    const hideColumn = function (id) {
        const state = getState();
        const list = allColumns().map((column) => {
            if (column.id === id) {
                column.hidden = true;
            }

            return column;
        });

        update(columnServiceId, { ...state, columns: { list } });
    };

    const showColumn = function (id) {
        const state = getState();
        const list = allColumns().map((column) => {
            if (column.id === id) {
                column.hidden = false;
            }

            return column;
        });

        update(columnServiceId, { ...state, columns: { list } });
    };

    const hideAllColumns = function () {
        const state = getState();
        const list = allColumns().map((column) => {
            column.hidden = true;
            return column;
        });

        update(columnServiceId, { ...state, columns: { list } });
    };

    const showAllColumns = function () {
        const state = getState();
        const list = allColumns().map((column) => {
            column.hidden = false;
            return column;
        });

        update(columnServiceId, { ...state, columns: { list } });
    };

    return { allColumns, columns, colSpan, hideColumn, showColumn, hideAllColumns, showAllColumns };
};
