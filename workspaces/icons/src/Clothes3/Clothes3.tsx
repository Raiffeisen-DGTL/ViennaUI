import React, { SVGAttributes } from 'react';

export interface Clothes3Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Clothes3: React.FC<Clothes3Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M3 0a1 1 0 00-1 1v4a1 1 0 001 1h2v9a1 1 0 001 1h4v7a1 1 0 001 1h10a1 1 0 001-1V12a1 1 0 00-1-1h-4V6h2a1 1 0 001-1V1a1 1 0 00-1-1h-5a1 1 0 00-.707.293L11 2.586 8.707.293A1 1 0 008 0H3zm12 11V4h3V2h-3.586l-2.707 2.707a1 1 0 01-1.414 0L7.586 2H4v2h3v10h3v-2a1 1 0 011-1h4zm-3 11v-9h8v9h-3v-7h-2v7h-3z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Clothes3.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Clothes3.displayName = 'Clothes3';
export default Clothes3;
