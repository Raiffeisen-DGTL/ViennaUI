import React, { ReactNode, FC, PropsWithChildren } from 'react';

export interface ColumnGroupProps {
    id: string;
    title?: ReactNode;
    count?: number; // TODO: this prop is deprecated
    color?: 'miami10' | 'sochi10' | 'paris10' | 'tokyo10' | 'dubai10' | 'nice10';
    columns?: string[];
    pinned?: boolean;
    children?: ReactNode;
}

export const ColumnGroup: FC<PropsWithChildren<ColumnGroupProps>> = (props) => {
    return <>{props.children}</>;
};

ColumnGroup.displayName = 'ColumnGroup';
