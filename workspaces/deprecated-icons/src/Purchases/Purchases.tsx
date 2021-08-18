import React, { SVGAttributes } from 'react';

export interface PurchasesProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Purchases: React.FC<PurchasesProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M18 7.009V7h-1v2h1v11H6V9h2v2h2V6a2 2 0 114 0v1h-3v2h3v2h2V6a4 4 0 10-8 0v1H5.859A1.86 1.86 0 004 8.859v11.282C4 21.168 4.832 22 5.859 22h12.058c1.15 0 2.082-.933 2.083-2.083V9.084a2.079 2.079 0 00-2-2.075z' />
        </svg>
    );
};

Purchases.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Purchases.displayName = 'Purchases';
export default Purchases;
