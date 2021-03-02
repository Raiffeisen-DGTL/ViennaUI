import React, { SVGAttributes } from 'react';

export interface EquipmentProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Equipment: React.FC<EquipmentProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M13 6h-1a6 6 0 00-2.979.792l-.042.024a5.998 5.998 0 00-2.16 2.159l-.03.05a6 6 0 002.194 8.161l.034.02A6 6 0 0012 18h1v4h-2v-2.063a7.999 7.999 0 01-2.103-.563l-1.03 1.786-1.733-1 1.031-1.786a8 8 0 01-1.539-1.54L3.84 17.867l-1-1.732 1.786-1.032A7.998 7.998 0 014.063 13H2v-2h2.063a8 8 0 01.563-2.103L2.84 7.866l1-1.732 1.786 1.031a7.999 7.999 0 011.54-1.539L6.133 3.84l1.732-1 1.031 1.786A7.999 7.999 0 0111 4.063V2h2v4z' />
            <path
                fillRule='evenodd'
                d='M12 8a4 4 0 100 8 4 4 0 000-8zm-2 4a2 2 0 114 0 2 2 0 01-4 0z'
                clipRule='evenodd'
            />
            <path d='M20 14v-1h-2v-2h3a1 1 0 011 1v2h-2zm-2.618 5.528l-1.5-2.804-1.764.944 1.072 2.003-.745.497 1.11 1.664 1.5-1a1 1 0 00.327-1.304zm2.786-9.973l-.496-.745-2.004 1.072-.944-1.764 2.804-1.5a1 1 0 011.304.327l1 1.5-1.664 1.11zm.304 6.063l-2.804-1.5-.943 1.764 1.832.98-.389.583 1.664 1.11 1-1.5a1 1 0 00-.36-1.437zm-3.417-12.45a1 1 0 00-1.437.36l-1.5 2.804 1.764.944.98-1.833.583.39 1.11-1.665-1.5-1z' />
        </svg>
    );
};

Equipment.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Equipment.displayName = 'Equipment';
export default Equipment;
