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
            <path d='M20 7H4v7h16V7zM2 6.969A1.968 1.968 0 013.969 5h16.062A1.968 1.968 0 0122 6.969v7.062A1.968 1.968 0 0120.031 16H3.969A1.968 1.968 0 012 14.031V6.969zM2 17h20v2H2v-2zm3-9h4v2H5V8z' />
        </svg>
    );
};

BundleOfMoney.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

BundleOfMoney.displayName = 'BundleOfMoney';
export default BundleOfMoney;
