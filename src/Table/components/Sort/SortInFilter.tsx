import React from 'react';
import { DownArrowIcon, UpArrowIcon } from 'vienna.icons';
import { Groups } from '../../../Groups';
import { Button } from '../../../Button';
import { useTableService, useTableLocalization } from '../Context';
import { SortDirection } from '../../types';
import { SortState } from './SortModule';

export interface SortInFilterProps {
    field: string;
}

export const SortInFilter = <T,>({ field }: SortInFilterProps) => {
    const localize = useTableLocalization();
    const { setSortColumn, getSortColumn } = useTableService<T>();
    const current = getSortColumn() ?? ({} as SortState);

    const isCurrentSort = current.field === field;
    const isAsc = current.direction === SortDirection.Asc;
    const isDesc = current.direction === SortDirection.Desc;

    const onClick = (direction: SortDirection) => {
        return () => {
            if (isCurrentSort && current.direction === direction) {
                setSortColumn(field, SortDirection.None);
            } else {
                setSortColumn(field, direction);
            }
        };
    };

    return (
        <Groups design='vertical'>
            <Button design='ghost' size='xs' pressed={isCurrentSort && isAsc} onClick={onClick(SortDirection.Asc)}>
                <UpArrowIcon size='m' /> {localize('ds.table.filter.sortUp')}
            </Button>
            <Button design='ghost' size='xs' pressed={isCurrentSort && isDesc} onClick={onClick(SortDirection.Desc)}>
                <DownArrowIcon size='m' /> {localize('ds.table.filter.sortDown')}
            </Button>
        </Groups>
    );
};
