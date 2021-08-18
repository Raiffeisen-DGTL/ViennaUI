import React, { SVGAttributes } from 'react';

export interface PaymentSignatureErrorProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const PaymentSignatureError: React.FC<PaymentSignatureErrorProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M7.293 4.293a1 1 0 01.464-.263l4-1a1 1 0 01.95.263l4 4-1.414 1.414-3.6-3.6-1.737.435 9.744 9.744.007.007 1 1A1 1 0 0121 17v3a1 1 0 01-1 1h-3a1 1 0 01-.707-.293l-.993-.993-.007-.007-11-11a1 1 0 010-1.414l3-3zM17.586 16L8 6.414 6.414 8 16 17.586 17.586 16zM19 19v-1.586L17.414 19H19z'
                clipRule='evenodd'
            />
            <path d='M6 13v5H4v-5h2zm-1 8a1 1 0 100-2 1 1 0 000 2z' />
        </svg>
    );
};

PaymentSignatureError.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

PaymentSignatureError.displayName = 'PaymentSignatureError';
export default PaymentSignatureError;
