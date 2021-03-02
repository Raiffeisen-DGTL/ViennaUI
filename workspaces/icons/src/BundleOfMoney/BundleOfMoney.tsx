import React, { SVGAttributes } from 'react';

export interface BundleOfMoneyProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const BundleOfMoney: React.FC<BundleOfMoneyProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M20 3H4v2h16V3z' />
            <path
                fillRule='evenodd'
                d='M2 20a1 1 0 001 1h18a1 1 0 001-1V8a1 1 0 00-1-1H3a1 1 0 00-1 1v12zM6 9h12a2 2 0 002 2v6a2 2 0 00-2 2H6a2 2 0 00-2-2v-6a2 2 0 002-2z'
                clipRule='evenodd'
            />
        </svg>
    );
};

BundleOfMoney.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

BundleOfMoney.displayName = 'BundleOfMoney';
export default BundleOfMoney;
