import React from 'react';
import { UpArrow, DownArrow } from '@fcc/icons';
import { useTableService } from '../Context/TableContext';

export const SortIcon = ({ field }) => {
    const { getSortColumn } = useTableService();
    const isAsc = getSortColumn()?.field === field && getSortColumn()?.direction === 'asc';

    return (
        <>
            {!isAsc && <DownArrow size='s' />}
            {isAsc && <UpArrow size='s' />}
        </>
    );
};
