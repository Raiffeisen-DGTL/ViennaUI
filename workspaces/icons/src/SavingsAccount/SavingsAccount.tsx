import React, { SVGAttributes } from 'react';

export interface SavingsAccountProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const SavingsAccount: React.FC<SavingsAccountProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M2 20.586L12.586 10H14v1.414L3.414 22H2v-1.414zM5.2 11.8H3.8v1.4h1.4v-1.4zm-3.2.177C2 10.885 2.885 10 3.977 10h1.046C6.115 10 7 10.885 7 11.977v1.046A1.977 1.977 0 015.023 15H3.977A1.977 1.977 0 012 13.023v-1.046zM12.2 18.8h-1.4v1.4h1.4v-1.4zm-3.2.177C9 17.885 9.885 17 10.977 17h1.046c1.092 0 1.977.885 1.977 1.977v1.046A1.977 1.977 0 0112.023 22h-1.046A1.977 1.977 0 019 20.023v-1.046zM7 6h10v2H7V6zm12-4a2 2 0 012 2v16.012c0 1.098-.89 1.987-1.988 1.988H15v-2h4V4H5v5H3V4a2 2 0 012-2h14z' />
        </svg>
    );
};

SavingsAccount.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

SavingsAccount.displayName = 'SavingsAccount';
export default SavingsAccount;
