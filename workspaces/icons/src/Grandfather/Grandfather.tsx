import React, { SVGAttributes } from 'react';

export interface GrandfatherProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Grandfather: React.FC<GrandfatherProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M8.173 2.761A10 10 0 0121.798 10H23v2h-2.035a3.501 3.501 0 01-6.628 1H9.663a3.5 3.5 0 01-6.628-1H1v-2h1.202a10 10 0 015.971-7.239zm9.484 3.582a8 8 0 011.494 2.07A3.5 3.5 0 0014.036 11H9.964a3.5 3.5 0 00-5.116-2.587 8 8 0 0112.808-2.07zM5 11.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm14 0a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z'
                clipRule='evenodd'
            />
            <path d='M8 18.928A8 8 0 015.072 16L3.34 17a10 10 0 0017.32 0l-1.732-1A7.999 7.999 0 018 18.928z' />
            <path d='M15 18v-2H9v2h6z' />
        </svg>
    );
};

Grandfather.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Grandfather.displayName = 'Grandfather';
export default Grandfather;
