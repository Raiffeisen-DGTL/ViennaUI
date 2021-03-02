import React, { SVGAttributes } from 'react';

export interface CityProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const City: React.FC<CityProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M14 12h2v2h-2v-2zm2-4h-2v2h2V8zm-8 4H6v2h2v-2z' />
            <path
                fillRule='evenodd'
                d='M10 5a1 1 0 011-1h10a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V9a1 1 0 011-1h7V5zm4 13h-2V6h8v2h-2v2h2v2h-2v2h2v4h-4v-2h-2v2zM4 10h6v8H8v-2H6v2H4v-8z'
                clipRule='evenodd'
            />
        </svg>
    );
};

City.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

City.displayName = 'City';
export default City;
