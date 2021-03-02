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
            <path d='M18.994 6H4v9.994a2.06 2.06 0 01-2-2.056V6.063C2 4.923 2.924 4 4.063 4h12.875a2.06 2.06 0 012.056 2zm.944 1C21.077 7 22 7.924 22 9.063v7.875A2.063 2.063 0 0119.938 19H7.063A2.063 2.063 0 015 16.938V9.063C5 7.923 5.924 7 7.063 7h12.875zM7.063 9A.063.063 0 007 9.063V11h13V9.063A.063.063 0 0019.938 9H7.063zm12.875 8a.062.062 0 00.062-.062V13H7v3.938c0 .034.029.062.063.062h12.875z' />
        </svg>
    );
};

Cards.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Cards.displayName = 'Cards';
export default Cards;
