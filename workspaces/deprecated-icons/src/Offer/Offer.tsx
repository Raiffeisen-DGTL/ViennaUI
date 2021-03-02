import React, { SVGAttributes } from 'react';

export interface OfferProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Offer: React.FC<OfferProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M20 8a2 2 0 012 2v10.059A1.941 1.941 0 0120.059 22H4a2 2 0 01-2-2V10a2 2 0 012-2h16zM4 20h5V10H4v10zm7 0h2V10h-2v10zm9 0V10h-5v10h5zM8 5.07V7H6V3l1-1 5 3.333L17 2l1 1v4h-2V5.07L13.105 7h-2.21L8 5.07z' />
        </svg>
    );
};

Offer.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Offer.displayName = 'Offer';
export default Offer;
