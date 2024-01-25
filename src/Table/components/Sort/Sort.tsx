import React, { FC } from 'react';
import { useTableService } from '../Context/TableContext';
import { ColumnProps } from '../Column';
import { ColumnTitle } from '../ColumnTitle';
import { SortDirection } from '../../types';
import { SortIcon } from './SortIcon';

export interface SortProps {
    column: ColumnProps;
}

export const Sort: FC<SortProps> = ({ column }) => {
    const { id, title, forceIconVisibility } = column;
    const { setSortColumn, getSortColumn } = useTableService();
    const currentSort = getSortColumn();

    const onClick = () => {
        const newDirection =
            currentSort?.field === id && currentSort?.direction === SortDirection.Desc
                ? SortDirection.Asc
                : SortDirection.Desc;

        setSortColumn(id, newDirection);
    };

    return (
        <ColumnTitle
            title={title}
            active={currentSort?.field === id}
            forceIconVisibility={forceIconVisibility}
            icon={<SortIcon field={id} />}
            onClick={onClick}
        />
    );
};
