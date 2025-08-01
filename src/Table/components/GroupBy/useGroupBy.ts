import { useEffect } from 'react';
import { useTableService } from '../Context';
import { GroupTitleInterface } from './GroupTitle';
import { GroupByProps } from './GroupBy';
import { TableProps } from '../../Table';
import { TableItemGroupByType } from '../../types';
import { isGroupTitle } from '../../utils';

function groupTitleItem<T>(group: GroupByProps<T>): GroupTitleInterface<T> {
    return {
        isGroupTitle: true,
        ...group,
    };
}

function getOnlyIds<T>(
    items: (TableItemGroupByType<T> | GroupTitleInterface<T> | T)[],
    dataKey: NonNullable<TableProps<T>['dataKey']>
) {
    return items
        .map((item, rowIndex) => ({
            ...item,
            id: isGroupTitle(item) ? item.id : dataKey(item, rowIndex),
        }))
        .filter((item) => !('isGroupTitle' in item && item.isGroupTitle))
        .map((item) => item.id);
}

interface Props<T> {
    data: T[];
    dataKey: NonNullable<TableProps<T>['dataKey']>;
}

export function useGroupBy<T>({ data, dataKey }: Props<T>) {
    const { getGroupBy, isGroupExpanded, setVisibleRows, setAllRows } = useTableService<T>();

    const groupBy = getGroupBy();

    const getItems = (isGroup?: boolean): (TableItemGroupByType<T> | GroupTitleInterface<T> | T)[] => {
        if (!data || !Array.isArray(data)) return [];

        if (!groupBy || !Array.isArray(groupBy.groups) || groupBy.groups.length === 0) {
            return data;
        }

        return (
            groupBy.groups.reduce((acc: (TableItemGroupByType<T> | GroupTitleInterface<T>)[], group) => {
                const groupData = data.filter(group.filter).map((item) => ({
                    ...item,
                    // needed for creating unique row keys with custom dataKey function
                    groupId: group.id,
                }));

                acc.push(groupTitleItem(group));

                // hide group elements
                if (isGroup && group.expandable && !isGroupExpanded(group.id)) {
                    return acc;
                }

                return acc.concat(groupData);
            }, []) ?? []
        );
    };

    const items = getItems(true);
    const visibleRows = getOnlyIds(getItems(true), dataKey);
    const allItems = getOnlyIds(getItems(), dataKey);

    useEffect(() => {
        setVisibleRows(visibleRows);
    }, [visibleRows.join()]);

    useEffect(() => {
        setAllRows(allItems);
    }, [allItems.join()]);

    return items;
}
