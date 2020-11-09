import React, { SVGAttributes } from 'react';

export interface BetweenYourAccountsProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const BetweenYourAccounts: React.FC<BetweenYourAccountsProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M5 4H4v14h1v2h-.977A2.023 2.023 0 012 17.977V3.559C2 2.698 2.698 2 3.559 2H16a2 2 0 012 2H5zm14.989 1A2.011 2.011 0 0122 7.012v13c0 1.098-.89 1.987-1.988 1.988H7.984A1.984 1.984 0 016 20.016V15h2v5h12V7H8v4H6V7.011A2.01 2.01 0 018.01 5h11.979zM6 14v-2h6.727L11 10.273V9h1.273l4 4-4 4H11v-1.273L12.727 14H6z' />
        </svg>
    );
};

BetweenYourAccounts.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

BetweenYourAccounts.displayName = 'BetweenYourAccounts';
export default BetweenYourAccounts;
