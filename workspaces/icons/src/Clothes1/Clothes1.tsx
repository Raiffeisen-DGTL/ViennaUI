import React, { SVGAttributes } from 'react';

export interface Clothes1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Clothes1: React.FC<Clothes1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M11.235 4.152A2 2 0 1112 8a1 1 0 00-1 1v1.526l-8.465 6.926C1.08 18.642 1.922 21 3.8 21h16.4c1.88 0 2.72-2.358 1.266-3.548L13 10.526v-.653A4 4 0 108 6h2a2 2 0 011.235-1.848zM3.8 19l8.2-6.708L20.198 19H3.802z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Clothes1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Clothes1.displayName = 'Clothes1';
export default Clothes1;
