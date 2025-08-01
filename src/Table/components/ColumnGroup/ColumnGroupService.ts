import { TableConfig, TableState } from '../../types';

export interface ColumnGroupService {
    columnGroupSpan: (id: string) => number;
}

export const columnGroupService: <T>(
    getState: () => TableState<T>,
    update: (id: string, newState: TableState<T> | ((prev: TableState<T>) => TableState<T>)) => void,
    config: TableConfig<T>
) => ColumnGroupService = function (getState, _, config) {
    const columnGroup = (id: string) => {
        return config.columnGroup?.groups.find((group) => group.id === id);
    };

    const columnGroupSpan = function (id: string) {
        const state = getState();
        // get columns in column group
        const groupColumns = columnGroup(id)?.columns ?? [];

        // filter table columns by visibility and by this column group
        const columns = state?.columns?.list?.filter((c) => groupColumns.includes(c.id)).filter((c) => !c.hidden) ?? [];

        return columns.length;
    };

    return { columnGroupSpan };
};
