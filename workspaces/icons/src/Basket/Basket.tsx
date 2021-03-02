import React, { SVGAttributes } from 'react';

export interface BasketProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Basket: React.FC<BasketProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M11 13v4h2v-4h-2zm4 4v-4h2v4h-2zm-8-4v4h2v-4H7z' />
            <path
                fillRule='evenodd'
                d='M5.414 9l5.293-5.293-1.414-1.414-6.996 6.995a1.002 1.002 0 00-.278.908l2 10A1 1 0 005 21h14a1 1 0 00.98-.804l2-10a1 1 0 00-.276-.906l-6.997-6.997-1.414 1.414L18.586 9H5.414zm.406 10l-1.6-8h15.56l-1.6 8H5.82z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Basket.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Basket.displayName = 'Basket';
export default Basket;
