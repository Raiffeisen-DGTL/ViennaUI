import React, { type FC } from 'react';
import { UpArrowIcon, DownArrowIcon } from 'vienna.icons';
import { useTableService } from '../Context';
import { SortDirection } from '../../types';

export interface SortPropsType {
    column: string;
}

export const SortIcon: FC<SortPropsType> = ({ column }) => {
    const { getSortColumn } = useTableService();
    const sortColumn = getSortColumn();

    return (
        <>
            {(sortColumn?.field !== column || sortColumn?.direction === SortDirection.Desc) && (
                <DownArrowIcon size='s' />
            )}
            {sortColumn?.field === column && sortColumn?.direction === SortDirection.Asc && <UpArrowIcon size='s' />}
        </>
    );
};
