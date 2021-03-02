import React, { SVGAttributes } from 'react';

export interface RestaurantsProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Restaurants: React.FC<RestaurantsProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M14 2a6 6 0 016 6v8.041A1.958 1.958 0 0118.042 18H17v-2h1V8a4 4 0 00-2-3.464V22h-1.989L14 2zm-3 0l1 1v6a2 2 0 01-2 2H9v11H7V11H6a2 2 0 01-2-2V3l1-1h1v7h1V2h2v7h1V2h1z' />
        </svg>
    );
};

Restaurants.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Restaurants.displayName = 'Restaurants';
export default Restaurants;
