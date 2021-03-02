import React, { SVGAttributes } from 'react';

export interface PaymentOnReceipt1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const PaymentOnReceipt1: React.FC<PaymentOnReceipt1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M20 2a2 2 0 012 2v16.012c0 1.098-.89 1.987-1.988 1.988H7v-2h13V4H6v5H4V4a2 2 0 012-2h14zM10 19H5.766v3H4v-3H2v-1.8h2V16H2v-1.8h2V10h4a3 3 0 010 6H5.766v1.2H10V19zm-4.2-7.2v2.4H8a1.2 1.2 0 100-2.4H5.8zM8 6h10v2H8V6z' />
        </svg>
    );
};

PaymentOnReceipt1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

PaymentOnReceipt1.displayName = 'PaymentOnReceipt1';
export default PaymentOnReceipt1;
