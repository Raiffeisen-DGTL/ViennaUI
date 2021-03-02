import React, { SVGAttributes } from 'react';

export interface TruckProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Truck: React.FC<TruckProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M2 5a1 1 0 011-1h12a1 1 0 011 1v1.153l3.493.582A3 3 0 0122 9.695V18a3 3 0 01-5.236 2H7.236A3 3 0 012 18V5zm12 1v9H5c-.35 0-.687.06-1 .17V6h10zM5 19a1 1 0 110-2 1 1 0 010 2zm15-8V9.694a1 1 0 00-.836-.986L16 8.18V15h3c.35 0 .687.06 1 .17V13h-2v-2h2zm0 7a1 1 0 10-2 0 1 1 0 002 0zM8 18c0-.35-.06-.687-.17-1h8.34c-.11.313-.17.65-.17 1H8z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Truck.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Truck.displayName = 'Truck';
export default Truck;
