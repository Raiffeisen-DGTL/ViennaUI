import React, { SVGAttributes } from 'react';

export interface PaymentSigned2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const PaymentSigned2: React.FC<PaymentSigned2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M17.97 5.757a1 1 0 00-.263-.464l-3-3a1 1 0 00-1.414 0l-10 10-.007.007-.993.993A1 1 0 002 14v3a1 1 0 001 1h3a1 1 0 00.707-.293l1-1 .007-.007 8.744-8.744.434 1.737-3.6 3.6 1.415 1.414 4-4a1 1 0 00.263-.95l-1-4zM15.586 6L7 14.586 5.414 13 14 4.414 15.586 6zm-10 10H4v-1.586L5.586 16z'
                clipRule='evenodd'
            />
            <path d='M14.707 21.707l7.5-7.5-1.414-1.414L14 19.586l-2.293-2.293-1.414 1.414 3 3a1 1 0 001.414 0z' />
        </svg>
    );
};

PaymentSigned2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

PaymentSigned2.displayName = 'PaymentSigned2';
export default PaymentSigned2;
