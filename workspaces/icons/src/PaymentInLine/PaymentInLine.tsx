import React, { SVGAttributes } from 'react';

export interface PaymentInLineProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const PaymentInLine: React.FC<PaymentInLineProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M21 3h-9v2h9V3zM5 9v12H3V8a1 1 0 011-1h4L6.207 5.207l1.414-1.414 3.5 3.5a1 1 0 010 1.414l-3.5 3.5-1.414-1.414L8 9H5zm16 6h-9v2h9v-2zm0 4h-9v2h9v-2zm0-8h-9v2h9v-2zm-5-4h5v2h-5V7z' />
        </svg>
    );
};

PaymentInLine.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

PaymentInLine.displayName = 'PaymentInLine';
export default PaymentInLine;
