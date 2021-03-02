import React, { SVGAttributes } from 'react';

export interface CubeProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Cube: React.FC<CubeProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M11.51 2.128a1 1 0 01.98 0l8 4.5A1 1 0 0121 7.5v9a1 1 0 01-.51.872l-8 4.5a1 1 0 01-.98 0l-8-4.5A1 1 0 013 16.5v-9a1 1 0 01.51-.872l8-4.5zM5 15.915V9.21l6 3.375v6.705l-6-3.375zm8 3.375l6-3.375V9.21l-6 3.375v6.705zM12 4.147L17.96 7.5 12 10.853 6.04 7.5 12 4.147z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Cube.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Cube.displayName = 'Cube';
export default Cube;
