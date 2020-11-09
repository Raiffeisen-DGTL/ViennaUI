import React, { ReactNode, FC } from 'react';

export interface ColumnGroupProps {
    [key: string]: any;
    id: string;
    title?: ReactNode;
    count?: number; // TODO: this prop is deprecated
    color?: 'miami10' | 'sochi10' | 'paris10' | 'tokyo10' | 'dubai10' | 'nice10';
}

export const ColumnGroup: FC<ColumnGroupProps> = (props: ColumnGroupProps) => {
    return <>{props.children}</>;
};

ColumnGroup.displayName = 'ColumnGroup';
export default ColumnGroup;
