import React from 'react';
import { Up, Down } from 'vienna.icons';
import { useTableService } from '../Context/TableContext';
import { SortDirection } from '../../types';

export const SortIcon = ({ field }) => {
    const { getSortColumn } = useTableService();
    const isAsc = getSortColumn()?.field === field && getSortColumn()?.direction === SortDirection.Asc;

    return (
        <>
            {!isAsc && <Down size='s' />}
            {isAsc && <Up size='s' />}
        </>
    );
};
