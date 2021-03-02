import React, { SVGAttributes } from 'react';

export interface Headphones1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Headphones1: React.FC<Headphones1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M15.763 4.94A8 8 0 004.063 11H7a1 1 0 011 1v5a1 1 0 01-1 1l-2.485-.002a1 1 0 01-.831-.445A10 10 0 1112.026 22l-.005-2a8 8 0 005.27-2H17a1 1 0 01-1-1v-5a1 1 0 011-1h2.937a8 8 0 00-4.174-6.06zM19.937 13H18v3h.928a7.996 7.996 0 001.01-3zM4.063 13a8 8 0 001.008 2.998L6 16v-3H4.063z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Headphones1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Headphones1.displayName = 'Headphones1';
export default Headphones1;
