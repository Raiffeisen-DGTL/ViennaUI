import React, { SVGAttributes } from 'react';

export interface ToYourAccountProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ToYourAccount: React.FC<ToYourAccountProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M8 6h10v2H8V6zm12.441-4A1.559 1.559 0 0122 3.559v16.453c0 1.098-.89 1.987-1.988 1.988H5.559A1.559 1.559 0 014 20.441V16h2v4h14V4.031L19.969 4H6v8H4V3.559C4 2.698 4.698 2 5.559 2h14.882zM8 16.869L9.868 15H2v-2h7.868L8 11.131V10h1.131l4.001 4-4.001 4H8v-1.131z' />
        </svg>
    );
};

ToYourAccount.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ToYourAccount.displayName = 'ToYourAccount';
export default ToYourAccount;
