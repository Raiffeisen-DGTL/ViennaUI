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

export const columnService: ServiceFactory<ColumnService> = (getState, update) => {
    const allColumns = () => {
        return getState()?.columns?.list ?? [];
    };

    const columns = () => {
        const columns = getState()?.columns?.list?.filter((c) => !c.hidden);
        return columns ?? [];
    };

    const colSpan = () => {
        return columns().length + 2;
    };

    const hideColumn = (id) => {
        const state = getState();
        const list = allColumns().map((column) => {
            if (column.id === id) {
                column.hidden = true;
            }

            return column;
        });

        update(columnServiceId, { ...state, columns: { list } });
    };

    const showColumn = (id) => {
        const state = getState();
        const list = allColumns().map((column) => {
            if (column.id === id) {
                column.hidden = false;
            }

            return column;
        });

        update(columnServiceId, { ...state, columns: { list } });
    };

    const hideAllColumns = () => {
        const state = getState();
        const list = allColumns().map((column) => {
            column.hidden = true;
            return column;
        });

        update(columnServiceId, { ...state, columns: { list } });
    };

    const showAllColumns = () => {
        const state = getState();
        const list = allColumns().map((column) => {
            column.hidden = false;
            return column;
        });

        update(columnServiceId, { ...state, columns: { list } });
    };

    return { allColumns, columns, colSpan, hideColumn, showColumn, hideAllColumns, showAllColumns };
};
