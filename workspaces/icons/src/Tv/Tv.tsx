import React, { SVGAttributes } from 'react';

export interface TvProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Tv: React.FC<TvProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M5 18a3 3 0 01-3-3V5a3 3 0 013-3h14a3 3 0 013 3v10a3 3 0 01-3 3h-6v2h3v2H8v-2h3v-2H5zm-1-3a1 1 0 001 1h14a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v10zm6.573-9.32A1 1 0 009 6.5v7a1 1 0 001.573.82l5-3.5a1 1 0 000-1.64l-5-3.5zM13.256 10L11 11.58V8.42L13.256 10z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Tv.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Tv.displayName = 'Tv';
export default Tv;
