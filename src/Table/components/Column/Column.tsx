import React, { ReactNode } from 'react';
import { TableData } from '../../types';

export interface ColumnProps<T> {
    id: string;
    children?: ReactNode | ((data: T, index: number) => ReactNode);
    title?: ReactNode;
    titleHint?: string;
    titleSettings?: ReactNode;
    align?: 'left' | 'center' | 'right';
    width?: string | undefined;
    minWidth?: string | undefined;
    truncate?: boolean | undefined;
    noWrap?: boolean | undefined;
    hidden?: boolean | undefined;
    resizable?: boolean | undefined;
    sortable?: boolean | undefined;
    draggable?: boolean | undefined;
    pinned?: boolean | undefined;
    groupId?: string | undefined;
    filter?: ReactNode | ((setFilter: (value?: unknown) => void) => ReactNode) | undefined;
    /* Позволяет сделать иконку фильтрации и сортировки видимой всегда, а не только при наведении */
    forceIconVisibility?: boolean | undefined;
    monospaceFont?: boolean | undefined;
    onClick?: (event: React.MouseEvent) => void | undefined;
    disableHide?: boolean;
    /* Добавляет возможность покраски левого бордера в колонке таблицы */
    leftBorder?: boolean;
    /* При переполнении содержимого - контент колонки обрезается */
    cropText?: boolean;
    wordBreak?: React.CSSProperties['wordBreak'];
}

export function Column<T = TableData>({ children }: ColumnProps<T>) {
    return <>{children}</>;
}

Column.displayName = 'Column';
