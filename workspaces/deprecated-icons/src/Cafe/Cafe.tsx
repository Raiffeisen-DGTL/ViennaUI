import React, { SVGAttributes } from 'react';

export interface CafeProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Cafe: React.FC<CafeProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M16 12h2v2h-2v7H2V10h2v9h10v-7h2zM5 11h8v7H5v-7zm6 5v-3H7v3h4zM1 2h22v3.5a3.49 3.49 0 01-6 2.44 3.48 3.48 0 01-5 0 3.48 3.48 0 01-5 0A3.49 3.49 0 011 5.5V2zm20 3.5V4H3v1.5a1.5 1.5 0 003 0h2a1.5 1.5 0 003 0h2a1.5 1.5 0 003 0h2a1.5 1.5 0 003 0zM20 10h2v11h-5.08v-2H20v-9z' />
        </svg>
    );
};

Cafe.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Cafe.displayName = 'Cafe';
export default Cafe;
