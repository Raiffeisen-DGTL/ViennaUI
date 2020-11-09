import React, { SVGAttributes } from 'react';

export interface CurrentAccountProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CurrentAccount: React.FC<CurrentAccountProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M6 22.414l-4-4V17h1.414L6 19.586 11.586 14H13v1.414l-7 7zM8 6h10v2H8V6zm12-4a2 2 0 012 2v16.012c0 1.098-.89 1.987-1.988 1.988H8.424l2-2H20V4H6v13.512l-2-2V4a2 2 0 012-2h14z' />
        </svg>
    );
};

CurrentAccount.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CurrentAccount.displayName = 'CurrentAccount';
export default CurrentAccount;
