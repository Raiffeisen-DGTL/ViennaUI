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
            <path d='M19.667 9.862H22v11h-2.333l-2.667-2v.03a1.968 1.968 0 01-1.969 1.97H3.97A1.969 1.969 0 012 18.892v-7.061a1.97 1.97 0 011.97-1.97h11.06a1.97 1.97 0 011.97 1.97v.03l2.666-2zm-4.667 9v-7H4v7h11zm5-.25v-6.5l-3 2.25v2l3 2.25zM4.265 8.862L2.2 8.858A6.482 6.482 0 012 7.33a4.128 4.128 0 012.93-4.04A4.026 4.026 0 019.5 5.13a4.026 4.026 0 014.57-1.84A4.128 4.128 0 0117 7.33a6.482 6.482 0 01-.2 1.529h-2.064c.171-.482.26-.99.264-1.5v-.1a2.091 2.091 0 00-1.428-2.023 2.326 2.326 0 00-2.5.955 8.575 8.575 0 00-.864 1.67H8.794a14.762 14.762 0 00-.9-1.717 2.195 2.195 0 00-2.465-.908A2.09 2.09 0 004 7.262v.1c.005.51.094 1.018.265 1.5z' />
        </svg>
    );
};

Movie.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Movie.displayName = 'Movie';
export default Movie;
