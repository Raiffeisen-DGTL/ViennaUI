import React, { SVGAttributes } from 'react';

export interface CreditCashProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CreditCash: React.FC<CreditCashProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M21 2a1 1 0 011 1v12a1 1 0 01-1 1h-5v-2h2.085A1.5 1.5 0 0120 12.085v-6.17A1.5 1.5 0 0118.085 4H5.915A1.5 1.5 0 014 5.915V9H2V3a1 1 0 011-1h18zm-9 15.5a2 2 0 100 4 2 2 0 000-4zm-10-4a2 2 0 114 0 2 2 0 01-4 0z' />
            <path d='M4.207 21.707l9-9-1.414-1.414-9 9 1.414 1.414z' />
        </svg>
    );
};

CreditCash.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CreditCash.displayName = 'CreditCash';
export default CreditCash;
