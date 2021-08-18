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
            <path
                fillRule='evenodd'
                d='M12 2a4 4 0 00-4 4v1H6a2 2 0 00-2 2v11a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-2V6a4 4 0 00-4-4zm2 7v2h2V9h2v11H6V9h2v2h2V9h4zm0-2V6a2 2 0 10-4 0v1h4z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Purchases.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Purchases.displayName = 'Purchases';
export default Purchases;
