import React, { SVGAttributes } from 'react';

export interface OperationsHistoryProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const OperationsHistory: React.FC<OperationsHistoryProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 6v7h6v-2h-4V6z' />
            <path d='M12 6h2v5h4v2h-6V6zm1-4a10 10 0 11-8.789 14.787l1.5-1.5a8 8 0 10-.7-3.5L6.8 10H8v1.2l-4 4-4-3.966V10h1.166l1.843 1.823A10 10 0 0113 2z' />
        </svg>
    );
};

OperationsHistory.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

OperationsHistory.displayName = 'OperationsHistory';
export default OperationsHistory;
