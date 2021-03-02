import React, { SVGAttributes } from 'react';

export interface FavoriteProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Favorite: React.FC<FavoriteProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M17.284 21.88L12 18.05l-5.284 3.83-1.539-1.117 2.01-6.21-5.276-3.842L2.5 8.9l6.526-.007 2.024-6.2h1.9l2.024 6.2L21.5 8.9l.588 1.809-5.276 3.842 2.01 6.21-1.538 1.119zm-5.871-5.875h1.174l3.389 2.456-1.289-3.983.363-1.116 3.383-2.462h-4.185l-.95-.69L12 6.225 10.7 10.2l-.95.69H5.565l3.383 2.464.363 1.116-1.289 3.983 3.391-2.448z' />
        </svg>
    );
};

Favorite.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Favorite.displayName = 'Favorite';
export default Favorite;
