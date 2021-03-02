import React, { SVGAttributes } from 'react';

export interface RestaurantProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Restaurant: React.FC<RestaurantProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M4 2v6a1 1 0 001 1h4a1 1 0 001-1V2h2v6a3 3 0 01-3 3H8v11H6V11H5a3 3 0 01-3-3V2h2z' />
            <path
                fillRule='evenodd'
                d='M14 6a4 4 0 018 0v1a4.002 4.002 0 01-3 3.874V22h-2V10.874A4.002 4.002 0 0114 7V6zm4-2a2 2 0 00-2 2v1a2 2 0 104 0V6a2 2 0 00-2-2z'
                clipRule='evenodd'
            />
            <path d='M6 2v5h2V2H6z' />
        </svg>
    );
};

Restaurant.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Restaurant.displayName = 'Restaurant';
export default Restaurant;
