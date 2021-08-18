import React, { SVGAttributes } from 'react';

export interface BearProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Bear: React.FC<BearProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M10.087 2.38a5 5 0 014.186.167 3 3 0 112.653 5.307 5 5 0 01-9.853 0 3 3 0 112.654-5.307 4.52 4.52 0 01.36-.166zM12 4a3 3 0 00-1.8.6 1 1 0 01-1.4-.2A1 1 0 108 6h1v1a3 3 0 106 0V6h1a1 1 0 10-.8-1.6 1 1 0 01-1.4.2A3.001 3.001 0 0012 4z'
                clipRule='evenodd'
            />
            <path
                fillRule='evenodd'
                d='M4 19c0-1.302.882-2.255 2-2.707V15H5a3 3 0 110-6h1v2H5a1 1 0 100 2h2a1 1 0 011 1v2.032c1.21.155 2.367.863 2.81 1.968h2.38c.443-1.105 1.6-1.813 2.81-1.968V14a1 1 0 011-1h2a1 1 0 100-2h-1V9h1a3 3 0 110 6h-1v1.293c1.118.452 2 1.405 2 2.707 0 1.854-1.787 3-3.5 3-1.38 0-2.806-.743-3.31-2h-2.38c-.504 1.257-1.93 2-3.31 2C5.787 22 4 20.854 4 19zm3.5-1c-1.048 0-1.5.644-1.5 1s.452 1 1.5 1S9 19.356 9 19s-.452-1-1.5-1zm7.5 1c0-.356.452-1 1.5-1s1.5.644 1.5 1-.452 1-1.5 1-1.5-.644-1.5-1z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Bear.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Bear.displayName = 'Bear';
export default Bear;
