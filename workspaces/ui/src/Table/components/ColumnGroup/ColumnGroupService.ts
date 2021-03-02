import { TableServiceFactoryConfig } from '../../types';

export interface ColumnGroupService {
    columnGroupSpan: (id) => number;
}

export const columnGroupService: TableServiceFactoryConfig<ColumnGroupService> = function (getState, _, config) {
    const columnGroup = (id) => {
        return config.columnGroup?.groups.find((group) => group.id === id);
    };

    const columnGroupSpan = function (id) {
        const state = getState();
        // get columns in column group
        const groupColumns = columnGroup(id)?.columns ?? [];

        // filter table columns by visibility and by this column group
        const columns = state?.columns?.list?.filter((c) => groupColumns.includes(c.id)).filter((c) => !c.hidden) ?? [];

        return columns.length;
    };

    return { columnGroupSpan };
};
