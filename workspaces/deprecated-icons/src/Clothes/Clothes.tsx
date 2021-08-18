import React, { SVGAttributes } from 'react';

export interface ClothesProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Clothes: React.FC<ClothesProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M19.959 2.168h-4.875l-.193.749A3 3 0 0114 4.38v2.359a4.993 4.993 0 002.568-2.571H20v4h-3v12H7v-12H4v-4h3.432A4.988 4.988 0 0011 7.054v5.114l1 1h1V4.992c-.32.116-.659.175-1 .176a3 3 0 01-2.891-2.251l-.193-.749H4.042A2.042 2.042 0 002 4.21v3.917a2.041 2.041 0 002.042 2.041H5v9.959a2.041 2.041 0 002.042 2.041h9.917A2.041 2.041 0 0019 20.127v-9.959h.959A2.041 2.041 0 0022 8.127V4.21a2.041 2.041 0 00-2.041-2.042z' />
        </svg>
    );
};

Clothes.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Clothes.displayName = 'Clothes';
export default Clothes;
