import React, { FC, ReactNode } from 'react';
import { TableConfig } from '../../types';

export interface CustomWrapperProps {
    children: any;
    noHover: boolean;
    hasPadding: boolean;
    colSpan: number;
    tableConfig: TableConfig;
}

export interface ExpandingRowProps {
    allowMultiple?: boolean;
    noPadding?: boolean;
    children: ReactNode | ((data: any) => ReactNode);
    expandedRow?: any | any[];
    customWrapper?: (props: CustomWrapperProps) => JSX.Element;
    onExpand?: (e, data) => void;
}

export const ExpandingRow: FC<ExpandingRowProps> = (props) => {
    return <>{props.children}</>;
};

ExpandingRow.displayName = 'ExpandingRow';
