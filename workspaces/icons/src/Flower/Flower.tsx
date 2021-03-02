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
            <path
                fillRule='evenodd'
                d='M15 2a3 3 0 00-3 3v7H7a1 1 0 00-.992 1.124l1 8A1 1 0 008 22h10a1 1 0 00.992-.876l1-8A1 1 0 0019 12h-5V8h3a3 3 0 003-3V2h-5zm-1 4h3a1 1 0 001-1V4h-3a1 1 0 00-1 1v1zM8.883 20l-.75-6h9.734l-.75 6H8.883z'
                clipRule='evenodd'
            />
            <path
                fillRule='evenodd'
                d='M11 7a3 3 0 00-3-3H3v3a3 3 0 003 3h5V7zM8 6a1 1 0 011 1v1H6a1 1 0 01-1-1V6h3z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Flower.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Flower.displayName = 'Flower';
export default Flower;
