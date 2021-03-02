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
            <path
                fillRule='evenodd'
                d='M10 2a3 3 0 00-3 3v1H3a1 1 0 00-1 1v4a1 1 0 001 1v9a1 1 0 001 1h16a1 1 0 001-1v-9a1 1 0 001-1V7a1 1 0 00-1-1h-4V5a3 3 0 00-5-2.236A2.989 2.989 0 0010 2zm0 2a1 1 0 011 1v1H9V5a1 1 0 011-1zm4 0a1 1 0 011 1v1h-2V5a1 1 0 011-1zm-1 8h6v8h-6v-8zm-8 8v-8h6v8H5zm8-10V8h7v2h-7zm-2 0V8H4v2h7z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Offer.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Offer.displayName = 'Offer';
export default Offer;
