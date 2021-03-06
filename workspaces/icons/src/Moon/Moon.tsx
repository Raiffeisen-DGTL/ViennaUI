import React, { SVGAttributes } from 'react';

export interface MoonProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Moon: React.FC<MoonProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M14 4a8 8 0 101.752 15.808A9.982 9.982 0 0112 12a9.981 9.981 0 013.752-7.808A8.032 8.032 0 0014 4zM4 12C4 6.477 8.477 2 14 2c1.595 0 3.105.374 4.445 1.04a1 1 0 010 1.791A8 8 0 0014 12a8 8 0 004.445 7.169 1 1 0 010 1.791A9.963 9.963 0 0114 22C8.477 22 4 17.523 4 12z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Moon.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Moon.displayName = 'Moon';
export default Moon;
