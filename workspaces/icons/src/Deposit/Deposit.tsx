import React, { SVGAttributes } from 'react';

export interface DepositProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Deposit: React.FC<DepositProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1h-1v2h-2v-2H7v2H5v-2H4a1 1 0 01-1-1V4zm2 1v14h14v-4h-2v1a1 1 0 01-1 1H8a1 1 0 01-1-1V8a1 1 0 011-1h8a1 1 0 011 1v1h2V5H5zm12 8h2v-2h-2v2zM9 9v2h2v2H9v2h6V9H9z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Deposit.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Deposit.displayName = 'Deposit';
export default Deposit;
