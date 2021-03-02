import React, { SVGAttributes } from 'react';

export interface RoubleRingProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const RoubleRing: React.FC<RoubleRingProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M14.07 4.273a8 8 0 11-8.3 12.744l-1.56 1.254a10 10 0 1010.377-15.93l-.517 1.932z' />
            <path
                fillRule='evenodd'
                d='M9 3a3 3 0 010 6H6v1h4v2H6v3H4v-3H2v-2h2V9H2V7h2V3h5zM6 5h3a1 1 0 010 2H6V5z'
                clipRule='evenodd'
            />
        </svg>
    );
};

RoubleRing.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

RoubleRing.displayName = 'RoubleRing';
export default RoubleRing;
