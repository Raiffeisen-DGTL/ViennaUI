import React, { ReactNode, FC } from 'react';

export interface ColumnProps {
    [key: string]: any;
    id: string;
    children?: ReactNode;
    title?: ReactNode;
    align?: 'left' | 'center' | 'right';
    width?: string;
    truncate?: boolean;
    noWrap?: boolean;
    hidden?: boolean;
    resizable?: boolean;
    sortable?: boolean;
    draggable?: boolean;
    pinned?: boolean;
    groupId?: string;
}

export const Column: FC<ColumnProps> = (props: ColumnProps) => {
    return <>{props.children}</>;
};

Column.displayName = 'Column';
export default Column;
