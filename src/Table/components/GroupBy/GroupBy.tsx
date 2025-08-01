import React, { ReactNode } from 'react';
import { TableData } from '../../types';

export interface GroupByProps<T> {
    id: string;
    title: ReactNode;
    filter: (data: T) => boolean;
    pinned?: boolean;
    expandable?: boolean;
    selectable?: boolean;
    expandedDefault?: boolean;
    onExpand?: (id: string, e: React.MouseEvent<HTMLElement>) => void;
}

export function GroupBy<T = TableData>(props: GroupByProps<T>) {
    return <>{props.id}</>;
}

GroupBy.displayName = 'GroupBy';
