import React, { SVGAttributes } from 'react';

export interface PackagesProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Packages: React.FC<PackagesProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M17 8h-3V6h3a2 2 0 00-2.34-2 2 2 0 00-1.45 1.2A5.59 5.59 0 0011.54 4a4 4 0 013.86-2A4.12 4.12 0 0119 6.18V10h-2V8zm-1 1v11a2 2 0 01-2 2H3.86A1.86 1.86 0 012 20.14V9h3a4 4 0 014.4-4A4.12 4.12 0 0113 9.18V13h-2v-2H8V9h3a2 2 0 00-2.34-2A2.08 2.08 0 007 9.11V13H5v-2H4v9h10V9h2zm4-3h2v11a2 2 0 01-2 2h-3v-2h3V6z' />
        </svg>
    );
};

Packages.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Packages.displayName = 'Packages';
export default Packages;
