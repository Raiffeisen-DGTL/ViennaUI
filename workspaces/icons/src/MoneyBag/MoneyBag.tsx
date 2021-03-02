import React, { SVGAttributes } from 'react';

export interface MoneyBagProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const MoneyBag: React.FC<MoneyBagProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M8 2a1 1 0 00-.858 1.514L9.79 7.928 5.066 14a4.956 4.956 0 003.912 8h6.043a4.957 4.957 0 003.913-8l-3.89-5H18V7h-3.234l2.091-3.486A1 1 0 0016 2H8zM6.644 15.229L11.49 9h1.022l4.844 6.229A2.956 2.956 0 0115.021 20H8.979a2.956 2.956 0 01-2.334-4.771zM14.234 4l-1.8 3h-.868l-1.8-3h4.467z'
                clipRule='evenodd'
            />
        </svg>
    );
};

MoneyBag.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

MoneyBag.displayName = 'MoneyBag';
export default MoneyBag;
