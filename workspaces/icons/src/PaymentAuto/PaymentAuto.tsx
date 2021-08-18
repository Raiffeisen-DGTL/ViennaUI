import React, { SVGAttributes } from 'react';

export interface PaymentAutoProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const PaymentAuto: React.FC<PaymentAutoProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M4 12a8 8 0 0115.401-3.043l-2.345-.414-.348 1.97 4.924.868a1 1 0 001.159-.811l.868-4.924-1.97-.348-.49 2.776A10.002 10.002 0 0012 2C6.477 2 2 6.477 2 12h2zm15.951.89a8.001 8.001 0 01-14.714 3.385l2.708.478.347-1.97-4.924-.868a1 1 0 00-1.158.811l-.87 4.924 1.97.347.419-2.374A9.989 9.989 0 0012 22c5.148 0 9.386-3.89 9.94-8.89l-1.989-.22z' />
            <path d='M16.207 14.793L13 11.586V7h-2v5a1 1 0 00.293.707l3.5 3.5 1.414-1.414z' />
        </svg>
    );
};

PaymentAuto.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

PaymentAuto.displayName = 'PaymentAuto';
export default PaymentAuto;
