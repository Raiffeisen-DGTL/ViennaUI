import React, { SVGAttributes } from 'react';

export interface PharmaciesProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Pharmacies: React.FC<PharmaciesProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M10 14.168a8 8 0 01-8-8h16a8 8 0 01-8 8zm5.65-6H4.35a5.99 5.99 0 0011.3 0zm-8.15 9a1.5 1.5 0 000 3H9v-2h2v2h3l1 1v1H7.5a3.5 3.5 0 010-7h7a5.5 5.5 0 000-11H7v-1l1-1h6.5a7.5 7.5 0 010 15h-7z' />
        </svg>
    );
};

Pharmacies.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Pharmacies.displayName = 'Pharmacies';
export default Pharmacies;
