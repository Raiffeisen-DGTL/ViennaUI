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
            <path d='M1 18h22a2 2 0 01-2 2H3a2 2 0 01-2-2zM18.969 4C20.091 4 21 4.91 21 6.031V15a2 2 0 01-2 2H5a2 2 0 01-2-2V6.031C3 4.909 3.91 4 5.031 4h13.938zM19 15V5.988H5V15h14z' />
        </svg>
    );
};

Laptop.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Laptop.displayName = 'Laptop';
export default Laptop;
