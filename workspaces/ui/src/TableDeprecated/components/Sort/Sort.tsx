import React, { FC, useCallback } from 'react';
import { useTableService } from '../Context/TableContext';
import { ColumnProps } from '../Column';
import { ColumnTitle } from '../ColumnTitle';
import { SortDirection } from '../../types';
import { SortIcon } from './SortIcon';

export interface SortProps {
    [key: string]: any;
    column: ColumnProps;
}

export const Sort: FC<SortProps> = ({ column }) => {
    const { id, title } = column;
    const { setSortColumn, getSortColumn } = useTableService();
    const currentSort = getSortColumn();

    const onClick = useCallback(() => {
        const currentDirection = currentSort?.direction;
        const newDirection =
            !currentDirection || currentDirection === SortDirection.Asc ? SortDirection.Desc : SortDirection.Asc;

        setSortColumn(id, newDirection);
    }, [setSortColumn]);

    return (
        <ColumnTitle
            onClick={onClick}
            title={title}
            active={currentSort?.field === id}
            icon={<SortIcon field={id} />}
        />
    );
};

export default Sort;
