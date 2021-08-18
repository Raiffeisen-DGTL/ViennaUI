import React, { SVGAttributes } from 'react';

export interface PaymentPartlySignedProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const PaymentPartlySigned: React.FC<PaymentPartlySignedProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M5.758 3.03a1 1 0 00-.465.263l-3 3a1 1 0 000 1.414L4.586 10H2v5h2v-3h2.586l4.707 4.707v.001l1 1A1 1 0 0013 18h3a1 1 0 001-1v-3a1 1 0 00-.293-.707l-8.75-8.751 1.736-.435 3.6 3.6 1.414-1.414-4-4a1 1 0 00-.95-.263l-4 1zM13.586 13L12 14.586 4.414 7 6 5.414 13.586 13zM15 16h-1.586L15 14.414V16z'
                clipRule='evenodd'
            />
            <path d='M17 10v2h3v3h2v-5h-5zm0 10h3v-3h2v5h-5v-2zM4 20h3v2H2v-5h2v3zm5 0h6v2H9v-2z' />
        </svg>
    );
};

PaymentPartlySigned.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

PaymentPartlySigned.displayName = 'PaymentPartlySigned';
export default PaymentPartlySigned;
