import React, { useMemo } from 'react';
import { useTableService } from '../Context';
import { ColumnProps } from '../Column';
import { ColumnTitle } from '../ColumnTitle';
import { SortDirection } from '../../types';
import { SortIcon } from './SortIcon';
import { generateArrayItem } from '../../../Utils';
import { TableProps } from '../..';

export interface SortProps<T> {
    column: ColumnProps<T>;
    enableCancelSort?: boolean;
    onSort?: TableProps['onSort'];
}

export const Sort = <T,>({ column, enableCancelSort, onSort }: SortProps<T>) => {
    const { id, title, forceIconVisibility, align } = column;
    const { setSortColumn, getSortColumn } = useTableService();
    const currentSort = getSortColumn();

    const isActive = currentSort?.field === id && currentSort.direction !== SortDirection.None;

    const sortDirectionArray = useMemo(
        () =>
            enableCancelSort
                ? [SortDirection.Desc, SortDirection.Asc, SortDirection.None]
                : [SortDirection.Desc, SortDirection.Asc],
        [enableCancelSort]
    );

    const nextSort = useMemo(
        () => generateArrayItem(sortDirectionArray, currentSort?.direction),
        [currentSort?.direction, sortDirectionArray]
    );

    const onClick = () => {
        if (nextSort) {
            const newDirection = currentSort?.field === id ? nextSort() : SortDirection.Desc;
            setSortColumn(id, newDirection, onSort);
        }
    };

    return (
        <ColumnTitle
            title={title}
            active={isActive}
            forceIconVisibility={forceIconVisibility}
            icon={<SortIcon column={id} />}
            align={align}
            onClick={onClick}
        />
    );
};
