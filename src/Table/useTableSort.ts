import { useMemo } from 'react';
import { SortDirection, TableData } from './types';
import { useTableConfig, useTableService } from './components';

export const useTableSort = <T = TableData>(data: T[]) => {
    const { getSortColumn } = useTableService();
    const { base } = useTableConfig();

    const newData = useMemo(() => {
        const sort = getSortColumn();

        if (base.settings.isOuterSortable || sort?.direction === SortDirection.None) return data ?? [];

        const newData: T[] = [].slice.call(data ?? []);

        if (!sort) return newData;

        return newData.sort((a, b) => {
            const valueA = (a[sort.field as keyof typeof a] as unknown as { toString: () => string })?.toString();
            const valueB = (b[sort.field as keyof typeof b] as unknown as { toString: () => string })?.toString();

            if (valueA === null || valueA === undefined) return 1;
            if (valueB === null || valueB === undefined) return -1;

            const nameA = valueA.toUpperCase();
            const nameB = valueB.toUpperCase();

            return nameA.localeCompare(nameB) * (sort.direction === SortDirection.Desc ? -1 : 1);
        });
    }, [getSortColumn, data, base]);

    return newData;
};
