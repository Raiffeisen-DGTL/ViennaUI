import React, { SVGAttributes } from 'react';

export interface RoubleProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Rouble: React.FC<RoubleProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 4a8 8 0 00-8 8v5H2v-5C2 6.477 6.477 2 12 2s10 4.477 10 10v5h-2v-5a8 8 0 00-8-8z' />
            <path
                fillRule='evenodd'
                d='M11 14v1h3v2h-3v2h11v2H2v-2h7v-2H8v-2h1v-1H8v-2h1V8h4a3 3 0 010 6h-2zm2-2a1.001 1.001 0 000-2h-2v2h2z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Rouble.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Rouble.displayName = 'Rouble';
export default Rouble;
