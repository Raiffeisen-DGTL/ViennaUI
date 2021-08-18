import React, { SVGAttributes } from 'react';

export interface Globe1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Globe1: React.FC<Globe1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M19.277 3.14l1.431-1.434L19.292.294l-2.916 2.923.822.701a8.002 8.002 0 01-2.285 13.533 8 8 0 01-8.998-2.258l-.703-.823-2.92 2.923 1.416 1.414 1.43-1.433A10.002 10.002 0 0011 19.95V21H8v2h8v-2h-3v-1.05a10.002 10.002 0 008-14.311 9.998 9.998 0 00-1.722-2.498z' />
            <path
                fillRule='evenodd'
                d='M16.89 13.476a6.004 6.004 0 00.653-5.772 5.999 5.999 0 00-9.02-2.594l-.816-.817-1.414 1.414.817.817a6 6 0 008.366 8.366l.817.817 1.414-1.414-.817-.817zM12 6a4 4 0 00-2.031.554l5.477 5.477A4.01 4.01 0 0016 10a4 4 0 00-4-4zm2.032 7.446L8.554 7.968a4 4 0 005.478 5.478z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Globe1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Globe1.displayName = 'Globe1';
export default Globe1;
