import React, { SVGAttributes } from 'react';

export interface PaymentSigned1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const PaymentSigned1: React.FC<PaymentSigned1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M5.293 3.293a1 1 0 01.465-.263l4-1a1 1 0 01.95.263l4 4-1.415 1.414-3.6-3.6-1.737.435 8.751 8.75A1 1 0 0117 14v3a1 1 0 01-1 1h-3a1 1 0 01-.707-.293L6.586 12H4v8h16v-8h-3v-2h4a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V11a1 1 0 011-1h1.586L2.293 7.707a1 1 0 010-1.414l3-3zM12 14.586L13.586 13 6 5.414 4.414 7 12 14.586zM13.414 16H15v-1.586L13.414 16z'
                clipRule='evenodd'
            />
        </svg>
    );
};

PaymentSigned1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

PaymentSigned1.displayName = 'PaymentSigned1';
export default PaymentSigned1;
