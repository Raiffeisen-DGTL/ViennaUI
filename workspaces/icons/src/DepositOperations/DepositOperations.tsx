import React, { SVGAttributes } from 'react';

export interface DepositOperationsProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const DepositOperations: React.FC<DepositOperationsProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M4 3a1 1 0 00-1 1v16a1 1 0 001 1h1v2h2v-2h10v2h2v-2h1a1 1 0 001-1v-2h-2v1H5V5h14v1h2V4a1 1 0 00-1-1H4z' />
            <path d='M8 7a1 1 0 00-1 1v8a1 1 0 001 1h7v-2H9v-2h2v-2H9V9h6V7H8zm11 5.586V8h2v4.586l1.793-1.793 1.414 1.414-3.5 3.5a1 1 0 01-1.414 0l-3.5-3.5 1.414-1.414L19 12.586z' />
        </svg>
    );
};

DepositOperations.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

DepositOperations.displayName = 'DepositOperations';
export default DepositOperations;
