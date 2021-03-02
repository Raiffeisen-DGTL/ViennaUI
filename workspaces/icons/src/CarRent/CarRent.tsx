import React, { SVGAttributes } from 'react';

export interface CarRentProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CarRent: React.FC<CarRentProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M18 7h.5v3a1 1 0 001 1H22V9h-1.5V7h.5a1 1 0 001-1V3.973a.941.941 0 00-.009-.123 1.963 1.963 0 00-.379-.95c-.415-.554-1.118-.9-2.112-.9s-1.697.346-2.113.9a1.966 1.966 0 00-.385 1.039.926.926 0 00-.002.034V6a1 1 0 001 1zm1.5-3c-.313 0-.45.059-.5.091V5h1v-.909c-.05-.032-.187-.091-.5-.091z'
                clipRule='evenodd'
            />
            <path d='M17 3.973v.024-.024z' />
            <path
                fillRule='evenodd'
                d='M6.66 6a2 2 0 00-1.84 1.212l-2.66 6.205a2 2 0 00-.161.788V18a2 2 0 001.105 1.789A3.001 3.001 0 008.829 20h6.342a3.001 3.001 0 005.724-.211A2 2 0 0022 18v-3.22a2 2 0 00-1.515-1.94l-2.796-.699-2.518-5.035A2 2 0 0013.382 6H6.659zM6 16a2.99 2.99 0 00-2 .764v-2.559L4.088 14H16.95c.082.033.167.06.254.082L20 14.78v1.983A3.001 3.001 0 0015.17 18H8.83A3.001 3.001 0 006 16zm9.382-4l-2-4H12v4h3.382zM10 8H6.66l-1.715 4H10V8zm7 11a1 1 0 112 0 1 1 0 01-2 0zM6 18a1 1 0 100 2 1 1 0 000-2z'
                clipRule='evenodd'
            />
        </svg>
    );
};

CarRent.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CarRent.displayName = 'CarRent';
export default CarRent;
