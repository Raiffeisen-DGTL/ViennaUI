import React, { SVGAttributes } from 'react';

export interface ByReceiptNumberProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ByReceiptNumber: React.FC<ByReceiptNumberProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M9 19v-6h2v9H9l-4-6v6H3v-9h2l4 6zm3 1h5v2h-5v-2zm3-7a2 2 0 012 2v2a2 2 0 01-2 2h-1a2 2 0 01-2-2v-2a2 2 0 012-2h1zm.2 4.2v-2.4h-1.4v2.4h1.4zM7 6h10v2H7V6zm12-4a2 2 0 012 2v16.012c0 1.098-.89 1.987-1.988 1.988H18v-2h1V4H5v8H3V4a2 2 0 012-2h14z' />
        </svg>
    );
};

ByReceiptNumber.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ByReceiptNumber.displayName = 'ByReceiptNumber';
export default ByReceiptNumber;
