import React, { FC, useCallback } from 'react';
import { ArrowUp, ArrowDown } from 'vienna.icons';
import { Box, Icon } from './Sort.styles';
import { useTableService, useTableConfig } from '../Context/TableContext';

export interface SortProps {
    field: string;
    children: any;
}

export const Sort: FC<SortProps> = (props) => {
    const { field, children } = props;
    const { setSortColumn, getSortColumn } = useTableService();
    const { sort } = useTableConfig();
    const currentSort = getSortColumn();

    const isActive = currentSort?.field === field;
    const isAsc = isActive && currentSort?.direction === 'asc';

    const onClick = useCallback(
        (e) => {
            let newField: any = field;
            const currentDirection = currentSort?.direction ?? 'none';
            const newDirection: any = currentDirection === 'asc' || currentDirection === 'none' ? 'desc' : 'asc';

            if (!newDirection) {
                newField = undefined;
            }

            setSortColumn(newField, newDirection);

            if (typeof sort?.onSort === 'function') {
                sort.onSort(e, { field: newField, direction: newDirection });
            }
        },
        [setSortColumn]
    );

    return (
        <Box onClick={onClick} active={isActive}>
            {children}
            <Icon active={isActive}>
                {!isAsc && <ArrowDown size='s' />}
                {isAsc && <ArrowUp size='s' />}
            </Icon>
        </Box>
    );
};

export default Sort;
