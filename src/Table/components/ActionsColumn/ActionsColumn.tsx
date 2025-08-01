import React from 'react';
import { ColumnProps } from '../Column';
import { TableData } from '../../types';

export type ActionsColumnProps<T> = Omit<
    ColumnProps<T>,
    'title' | 'hidden' | 'resizable' | 'sortable' | 'draggable' | 'pinned' | 'groupId'
> & {
    shrinkActionsColumn?: boolean;
};

export function ActionsColumn<T = TableData>(props: ActionsColumnProps<T>) {
    return <>{props.children}</>;
}

ActionsColumn.displayName = 'ActionsColumn';
