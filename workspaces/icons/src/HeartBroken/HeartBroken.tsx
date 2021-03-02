import React, { SVGAttributes } from 'react';

export interface HeartBrokenProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const HeartBroken: React.FC<HeartBrokenProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M7.25 2.5C4.068 2.5 1.5 5.095 1.5 8.281c0 2.084 1.196 3.928 2.499 5.435 2.157 2.496 4.676 5.116 6.996 7.225.57.518 1.44.518 2.01 0 2.32-2.109 4.84-4.729 6.996-7.225 1.303-1.507 2.499-3.351 2.499-5.435 0-3.186-2.568-5.781-5.75-5.781a5.71 5.71 0 00-3.617 1.287 11.8 11.8 0 00-1.136 1.042 11.29 11.29 0 00-1.13-1.042A5.711 5.711 0 007.25 2.5zM3.5 8.281C3.5 6.187 5.185 4.5 7.25 4.5c.892 0 1.71.313 2.354.838.671.546 1.02.94 1.214 1.182.048.06.078.098.101.13L9.86 9.123l2.455 3.437-1.847 3.233.27 2.159a89.168 89.168 0 01-5.225-5.543C4.281 10.983 3.5 9.612 3.5 8.28zm9.307 10.11a88.309 88.309 0 005.681-5.982C19.72 10.983 20.5 9.612 20.5 8.28c0-2.094-1.685-3.781-3.75-3.781a3.71 3.71 0 00-2.354.838c-.68.554-1.038.952-1.236 1.195l-.031.039-.988 2.305 2.545 3.563-2.152 3.767.273 2.184zM11.34 5.614l-.005.006v-.001l.005-.005z'
                clipRule='evenodd'
            />
        </svg>
    );
};

HeartBroken.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

HeartBroken.displayName = 'HeartBroken';
export default HeartBroken;
