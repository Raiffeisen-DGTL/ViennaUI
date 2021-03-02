import React from 'react';
import { Groups, Button } from 'vienna-ui';
import { Up, Down } from 'vienna.icons';
import { useTableService, useTableLocalization } from '../Context/TableContext';
import { SortDirection } from '../../types';

export const SortInFilter = ({ field }) => {
    const localize = useTableLocalization();
    const { setSortColumn, getSortColumn } = useTableService();
    const current: any = getSortColumn() ?? {};

    const isCurrentSort = current.field === field;
    const isAsc = current.direction === SortDirection.Asc;

    const onClick = (direction: SortDirection) => {
        return () => {
            if (isCurrentSort && current.direction === direction) {
                return;
            }

            setSortColumn(field, direction);
        };
    };

    return (
        <Groups design='vertical'>
            <Button design='ghost' size='xs' pressed={isCurrentSort && isAsc} onClick={onClick(SortDirection.Asc)}>
                <Up size='m' /> {localize('ds.table.filter.sortUp')}
            </Button>
            <Button design='ghost' size='xs' pressed={isCurrentSort && !isAsc} onClick={onClick(SortDirection.Desc)}>
                <Down size='m' /> {localize('ds.table.filter.sortDown')}
            </Button>
        </Groups>
    );
};
