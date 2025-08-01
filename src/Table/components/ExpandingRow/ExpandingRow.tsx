import React, { FC, ReactNode } from 'react';
import { TableConfig, TableData } from '../../types';
import { OnChangeHandler, Pretty } from '../../../Utils';

export interface CustomWrapperProps<T> {
    children: T[];
    noHover: boolean;
    hasPadding: boolean;
    colSpan: number;
    tableConfig: TableConfig<T>;
}

export interface ExpandingRowProps<T> {
    allowMultiple?: boolean;
    noPadding?: boolean;
    children: ReactNode | ((data: T) => ReactNode) | ((data: T) => T[]);
    expandedRow?: string | string[];
    customWrapper?: FC<CustomWrapperProps<T>>;
    onExpand?: OnChangeHandler<T, React.MouseEvent<HTMLDivElement>, null>;
}

export namespace ExpandingRow {
    export type OnExpand<T = TableData> = Pretty.Func<OnChangeHandler<T, React.MouseEvent<HTMLDivElement>, null>>;
}

export function ExpandingRow<T = TableData>(props: ExpandingRowProps<T>) {
    return <>{props.children}</>;
}

ExpandingRow.displayName = 'ExpandingRow';
