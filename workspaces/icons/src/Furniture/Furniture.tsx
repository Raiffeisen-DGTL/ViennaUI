import React, { SVGAttributes } from 'react';

export interface FurnitureProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Furniture: React.FC<FurnitureProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M8 2a3 3 0 00-3 3v3H4a3 3 0 00-1 5.83V21a1 1 0 001 1h16a1 1 0 001-1v-7.17A3.001 3.001 0 0020 8h-1V5a3 3 0 00-3-3H8zm9 3a1 1 0 00-1-1H8a1 1 0 00-1 1v3.535C8.196 9.227 9 10.52 9 12v1h6v-1c0-1.48.804-2.773 2-3.465V5zm2 5a2 2 0 00-2 2v6h-2v-3H9v3H7v-6a2 2 0 00-2-2H4a1 1 0 100 2h1v8h14v-8h1a1 1 0 100-2h-1z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Furniture.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Furniture.displayName = 'Furniture';
export default Furniture;
