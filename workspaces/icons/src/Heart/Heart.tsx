import React, { SVGAttributes } from 'react';

export interface HeartProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Heart: React.FC<HeartProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M7.25 4.5C5.185 4.5 3.5 6.187 3.5 8.281c0 1.33.78 2.702 2.012 4.128 2.007 2.322 4.33 4.748 6.488 6.74 2.158-1.992 4.482-4.418 6.488-6.74C19.72 10.983 20.5 9.612 20.5 8.28c0-2.094-1.685-3.781-3.75-3.781a3.71 3.71 0 00-2.354.838c-.68.554-1.038.952-1.236 1.195a6.924 6.924 0 00-.134.17l-.022.03c-.031.04-.068.089-.1.128-.034.042-.11.137-.214.224a1.09 1.09 0 01-.72.259 1.092 1.092 0 01-.7-.277 1.6 1.6 0 01-.205-.223 5.21 5.21 0 01-.106-.14 4.418 4.418 0 00-.14-.184c-.194-.242-.544-.636-1.215-1.182A3.711 3.711 0 007.25 4.5zM1.5 8.281C1.5 5.095 4.068 2.5 7.25 2.5c1.37 0 2.63.483 3.617 1.287.496.404.86.752 1.13 1.042a11.8 11.8 0 011.136-1.042A5.711 5.711 0 0116.75 2.5c3.182 0 5.75 2.595 5.75 5.781 0 2.084-1.196 3.928-2.499 5.435-2.157 2.496-4.676 5.116-6.997 7.225a1.492 1.492 0 01-2.008 0c-2.32-2.109-4.84-4.729-6.997-7.225C2.696 12.21 1.5 10.365 1.5 8.281z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Heart.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Heart.displayName = 'Heart';
export default Heart;
