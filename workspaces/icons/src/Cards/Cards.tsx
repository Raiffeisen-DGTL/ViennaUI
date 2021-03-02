import React, { SVGAttributes } from 'react';

export interface CardsProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Cards: React.FC<CardsProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M3 6a1 1 0 00-1 1v10a1 1 0 001 1h7a1 1 0 001-1V7a1 1 0 00-1-1H3zm1 10V8h5v8H4zM14 6a1 1 0 00-1 1v10a1 1 0 001 1h7a1 1 0 001-1V7a1 1 0 00-1-1h-7zm1 10V8h5v8h-5z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Cards.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Cards.displayName = 'Cards';
export default Cards;
