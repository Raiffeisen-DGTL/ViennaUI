import React, { SVGAttributes } from 'react';

export interface CardProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Card: React.FC<CardProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M6 14h4.5v-2H6v2z' />
            <path
                fillRule='evenodd'
                d='M5 4a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3H5zM4 7a1 1 0 011-1h14a1 1 0 011 1v1H4V7zm0 3h16v7a1 1 0 01-1 1H5a1 1 0 01-1-1v-7z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Card.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Card.displayName = 'Card';
export default Card;
