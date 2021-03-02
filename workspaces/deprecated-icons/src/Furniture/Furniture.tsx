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
            <path d='M7 4v5H5V4.043A2.042 2.042 0 017.042 2h9.916A2.042 2.042 0 0119 4.043V9h-2V4H7zm12.959 6A2.041 2.041 0 0122 12.043v6.989A1.968 1.968 0 0120.031 21H19v1h-2v-1H7v1H5v-1H3.969A1.969 1.969 0 012 19.032v-6.989A2.042 2.042 0 014.042 10H7a2.042 2.042 0 012.042 2.043V14H15v-1.957A2.042 2.042 0 0117.042 10h2.917zM20 19v-7h-3v4H7v-2h.042v-2H4v7h16z' />
        </svg>
    );
};

Furniture.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Furniture.displayName = 'Furniture';
export default Furniture;
