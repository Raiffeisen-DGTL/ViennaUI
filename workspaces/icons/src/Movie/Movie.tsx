import React, { SVGAttributes } from 'react';

export interface MovieProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Movie: React.FC<MovieProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M18 11a1 1 0 00-1-1 5 5 0 10-8.52-5.14 4 4 0 00-5.891 5.228A1 1 0 002 11v9a1 1 0 001 1h14a1 1 0 001-1v-.819l2.44 1.648A1 1 0 0022 20v-9a1 1 0 00-1.56-.829L18 11.82V11zm-5-7a3 3 0 100 6 3 3 0 000-6zm5 10.232v2.537l2 1.35v-5.237l-2 1.35zM16 12H4v7h12v-7zM4 8a2 2 0 114 0 2 2 0 01-4 0z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Movie.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Movie.displayName = 'Movie';
export default Movie;
