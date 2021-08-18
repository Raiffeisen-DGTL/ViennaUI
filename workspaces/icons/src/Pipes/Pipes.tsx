import React, { SVGAttributes } from 'react';

export interface PipesProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Pipes: React.FC<PipesProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M21 4h-8a2 2 0 00-2 2H9a4 4 0 014-4h8v2z' />
            <path
                fillRule='evenodd'
                d='M6.153 8h7.694l.334 2h3.639l2 10H22v2H2v-2h2.153l2-12zm9.694 12h1.933l-1.6-8h-1.666l1.333 8zm-3.694-10l1.667 10H6.18l.334-2H11v-2H6.847l1-6h4.306z'
                clipRule='evenodd'
            />
            <path d='M16 8h6V6h-6v2z' />
        </svg>
    );
};

Pipes.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Pipes.displayName = 'Pipes';
export default Pipes;
