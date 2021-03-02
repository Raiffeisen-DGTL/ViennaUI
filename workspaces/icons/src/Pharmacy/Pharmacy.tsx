import React, { SVGAttributes } from 'react';

export interface PharmacyProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Pharmacy: React.FC<PharmacyProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M6 4h8a6 6 0 010 12h-1v2h1a8 8 0 100-16H8a2 2 0 00-2 2z' />
            <path
                fillRule='evenodd'
                d='M5 19a1 1 0 011-1h1v-2H6a3 3 0 100 6h10v-2h-5v-5.06c1.837-.224 3.377-1.064 4.498-2.326C16.806 11.14 17.5 9.144 17.5 7a1 1 0 00-1-1h-13a1 1 0 00-1 1c0 2.145.694 4.14 2.002 5.614 1.072 1.206 2.526 2.027 4.257 2.293.08.012.16.023.241.033V20H6a1 1 0 01-1-1zm.998-7.714C5.243 10.436 4.737 9.302 4.565 8h10.87c-.171 1.302-.678 2.436-1.433 3.286C13.071 12.334 11.72 13 10 13c-1.72 0-3.071-.666-4.002-1.714z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Pharmacy.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Pharmacy.displayName = 'Pharmacy';
export default Pharmacy;
