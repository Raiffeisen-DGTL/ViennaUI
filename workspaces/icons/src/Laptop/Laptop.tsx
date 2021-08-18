import React, { SVGAttributes } from 'react';

export interface LaptopProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Laptop: React.FC<LaptopProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M4 4a1 1 0 00-1 1v11a1 1 0 001 1h16a1 1 0 001-1V5a1 1 0 00-1-1H4zm1 11V6h14v9H5z'
                clipRule='evenodd'
            />
            <path d='M1 20v-1h22v1a1 1 0 01-1 1H2a1 1 0 01-1-1z' />
        </svg>
    );
};

Laptop.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Laptop.displayName = 'Laptop';
export default Laptop;
