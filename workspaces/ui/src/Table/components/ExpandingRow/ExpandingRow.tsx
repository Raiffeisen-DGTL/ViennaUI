import React, { FC, ReactNode } from 'react';

export interface ExpandingRowProps {
    allowMultiple?: boolean;
    children: ReactNode;
    expandedRow?: any | any[];
    onExpand?: (e, data) => void;
}

export const ExpandingRow: FC<ExpandingRowProps> = (props): JSX.Element => {
    return <>{props.children}</>;
};

ExpandingRow.displayName = 'ExpandingRow';
export default ExpandingRow;
