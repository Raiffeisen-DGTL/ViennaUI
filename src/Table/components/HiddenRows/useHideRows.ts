import { useTableService } from '../Context';
import { TableProps } from '../../Table';

interface Props<T> {
    data: T[];
    dataKey: NonNullable<TableProps<T>['dataKey']>;
}

export function useHideRows<T>({ data, dataKey }: Props<T>): Props<T>['data'] {
    const { getHideRows } = useTableService<T>();
    const hideRows = getHideRows();

    if (!data || !Array.isArray(data)) return [];

    return data.filter((item, index) => !hideRows.includes(dataKey(item, index)));
}
