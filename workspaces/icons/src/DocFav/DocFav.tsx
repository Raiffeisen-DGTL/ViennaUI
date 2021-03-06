import React, { SVGAttributes } from 'react';

export interface DocFavProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const DocFav: React.FC<DocFavProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M5 2a1 1 0 00-1 1v18a1 1 0 001 1h8v-2H6V4h12v11h2V3a1 1 0 00-1-1H5z' />
            <path d='M16 17a1 1 0 00-1 1v4h1a1 1 0 001-1v-2h2a1 1 0 001-1v-1h-4zM12 7c.152 0 .29.09.35.23l.94 2.182 2.365.22a.38.38 0 01.216.664l-1.785 1.568.522 2.317a.38.38 0 01-.565.411L12 13.38l-2.043 1.213a.38.38 0 01-.565-.41l.522-2.318-1.785-1.568a.38.38 0 01.216-.665l2.366-.22.94-2.181A.38.38 0 0112 7z' />
        </svg>
    );
};

DocFav.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

DocFav.displayName = 'DocFav';
export default DocFav;
