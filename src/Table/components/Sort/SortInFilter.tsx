import React from 'react';
import { UpArrow, DownArrow } from '@fcc/icons';
import { Groups } from '../../../Groups';
import { Button } from '../../../Button';
import { useTableService, useTableLocalization } from '../Context/TableContext';
import { SortDirection } from '../../types';
import { SortState } from './SortModule';

export const SortInFilter = ({ field }) => {
    const localize = useTableLocalization();
    const { setSortColumn, getSortColumn } = useTableService();
    const current = getSortColumn() ?? ({} as SortState);

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
                <UpArrow size='m' /> {localize('ds.table.filter.sortUp')}
            </Button>
            <Button design='ghost' size='xs' pressed={isCurrentSort && !isAsc} onClick={onClick(SortDirection.Desc)}>
                <DownArrow size='m' /> {localize('ds.table.filter.sortDown')}
            </Button>
        </Groups>
    );
};
