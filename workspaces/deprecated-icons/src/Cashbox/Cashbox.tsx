import React, { SVGAttributes } from 'react';

export interface CashboxProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Cashbox: React.FC<CashboxProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M14 7h-4V2h10v5h-4v2h2a2 2 0 012 2v5a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 012-2v-5a2 2 0 012-2h8V7zm4 9v-5H6v5h12zM6 18H4v2h16v-2H6zm1-6h2v2H7v-2zm3 0h2v2h-2v-2zm8-8h-6v1h6V4z' />
        </svg>
    );
};

Cashbox.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Cashbox.displayName = 'Cashbox';
export default Cashbox;
