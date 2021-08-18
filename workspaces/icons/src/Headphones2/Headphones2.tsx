import React, { SVGAttributes } from 'react';

export interface Headphones2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Headphones2: React.FC<Headphones2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M12 2a8 8 0 00-8 8v3.17A3.001 3.001 0 002 16v2a3 3 0 003 3h2a1 1 0 001-1v-6a1 1 0 00-1-1H6v-3a6 6 0 1112 0v3h-1a1 1 0 00-1 1v6a1 1 0 001 1h2a3 3 0 003-3v-2a3.001 3.001 0 00-2-2.83V10a8 8 0 00-8-8zM5 15a1 1 0 00-1 1v2a1 1 0 001 1h1v-4H5zm14 0a1 1 0 011 1v2a1 1 0 01-1 1h-1v-4h1z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Headphones2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Headphones2.displayName = 'Headphones2';
export default Headphones2;
