import { ColumnProps, GroupTitleInterface } from './components';
import { TableProps } from './Table';
import { TableData } from './types';

export const defaultDataKey = (item: Parameters<NonNullable<TableProps<TableData>['dataKey']>>[0]) =>
    item.id?.toString();
export const defaultFilterExpandingRow = () => true;

export const getColumnsWidthQuery = (list: ColumnProps<TableData>[] | undefined) =>
    (list ?? [])
        .filter((item) => item.width)
        .map((item) => `${item.id}:${item.width}`)
        .join(';');

export function isGroupTitle<T>(item: GroupTitleInterface<T> | T): item is GroupTitleInterface<T> {
    return (item as GroupTitleInterface<T>).isGroupTitle !== undefined;
}
