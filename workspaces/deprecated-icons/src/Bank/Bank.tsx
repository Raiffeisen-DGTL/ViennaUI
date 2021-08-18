import React, { SVGAttributes } from 'react';

export interface BankProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Bank: React.FC<BankProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M21 20l1 1v1H2v-1l1-1h18zM5 12h2v7H5v-7zm4 0h2v7H9v-7zm4 0h2v7h-2v-7zm4 0h2v7h-2v-7zM3 9h18v2H3V9zm9-4.764L4.473 8H3V6.5L12 2l9 4.5V8h-1.473L12 4.236z' />
        </svg>
    );
};

Bank.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Bank.displayName = 'Bank';
export default Bank;
