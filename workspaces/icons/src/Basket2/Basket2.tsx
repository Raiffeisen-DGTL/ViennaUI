import React, { SVGAttributes } from 'react';

export interface Basket2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Basket2: React.FC<Basket2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M16.162 13.29l1.8 1.8a3.5 3.5 0 11-1.873.955l-1.684-1.685a2.064 2.064 0 01-.249-.009l-9.314-.821a2 2 0 01-1.8-1.988v-4.5h2v4.479l9.348.849 2.435-6.328h-3.783v4h-2v-4h-2v4h-2v-4h-5v-2h15.552l.77-2h.154l3.523.005v2h-2.323l-3.452 9.022c-.03.076-.065.15-.104.22zm-10.62 3.452a1.8 1.8 0 100 3.6 1.8 1.8 0 000-3.6zm0-1.7a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm13 1.7a1.8 1.8 0 100 3.6 1.8 1.8 0 000-3.6zm-8.5 1.3h4v2h-4v-2z' />
        </svg>
    );
};

Basket2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Basket2.displayName = 'Basket2';
export default Basket2;
