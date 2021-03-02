import React, { SVGAttributes } from 'react';

export interface FlowerProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Flower: React.FC<FlowerProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M18 8h-3v4h5.13l-1.25 10H8.12L6.87 12H13V5a3 3 0 013-3h5v3a3 3 0 01-3 3zm-.15 6H9.13l.75 6h7.22l.75-6zM15 5v1h3a1 1 0 001-1V4h-3a1 1 0 00-1 1zm-3 5H7a3 3 0 01-3-3V4h5a3 3 0 013 3v3zM6 7a1 1 0 001 1h3V7a1 1 0 00-1-1H6v1z' />
        </svg>
    );
};

Flower.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Flower.displayName = 'Flower';
export default Flower;
