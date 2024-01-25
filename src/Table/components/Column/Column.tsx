import React, { FC, ReactNode } from 'react';

export interface ColumnProps {
    id: string;
    children?: ReactNode | ((data: any, index: any) => ReactNode);
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
    filter?: ReactNode | ((setFilter: (value?: unknown) => void) => ReactNode);
    /* Позволяет сделать иконку фильтрации и сортировки видимой всегда, а не только при наведении */
    forceIconVisibility?: boolean;
    onClick?: any;
}

export const Column: FC<ColumnProps> = ({ children }) => {
    return <>{children}</>;
};

Column.displayName = 'Column';
