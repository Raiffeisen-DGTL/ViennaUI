import React from 'react';
import { ColumnProps } from '../Column';

export type ActionsColumnProps = Omit<
    ColumnProps,
    'title' | 'hidden' | 'resizable' | 'sortable' | 'draggable' | 'pinned' | 'groupId'
>;

export const ActionsColumn: React.FC<ActionsColumnProps> = (props) => {
    return <>{props.children}</>;
};

ActionsColumn.displayName = 'ActionsColumn';
