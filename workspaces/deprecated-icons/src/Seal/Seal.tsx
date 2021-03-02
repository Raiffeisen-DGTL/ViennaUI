import React, { SVGAttributes } from 'react';

export interface SealProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Seal: React.FC<SealProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M4 20h16v2H4v-2zm13.953-6.89A2.046 2.046 0 0120 15.154V19H4v-3.845a2.046 2.046 0 012.047-2.046H8a1 1 0 001-1V9.854a4.5 4.5 0 116 0v2.255a1 1 0 001 1h1.953zm.047 4v-2h-2a3 3 0 01-3-3V8.96a2.65 2.65 0 10-2 0v3.15a3 3 0 01-3 3H6v2h12z' />
        </svg>
    );
};

Seal.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Seal.displayName = 'Seal';
export default Seal;
