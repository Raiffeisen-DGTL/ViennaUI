import React, { SVGAttributes } from 'react';

export interface AmbulanceProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Ambulance: React.FC<AmbulanceProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M1 16.083V9h2v9a1.99 1.99 0 01-2-1.917zM21.229 10.4A2.537 2.537 0 0123 12.969v3.114A1.917 1.917 0 0121.083 18h-1.319a2 2 0 110-2H21v-3.177a.927.927 0 00-.752-.9 3.708 3.708 0 01-2.391-1.665l-.969-1.551A1.5 1.5 0 0015.612 8H1L0 7V6h9.333l.351-1.047a1.387 1.387 0 012.632 0l.351 1.051h3.581c.813 0 1.569.42 2 1.109l.724 1.16a4 4 0 002.257 2.127zM6 15a1.991 1.991 0 011.745 1.042H15V18H7.723A2 2 0 116 15zm4-6h1.958v2.042H14V13h-2.042v2H10v-2H8v-1.958h2V9z' />
        </svg>
    );
};

Ambulance.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Ambulance.displayName = 'Ambulance';
export default Ambulance;
