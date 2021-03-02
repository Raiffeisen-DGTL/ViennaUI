import React, { SVGAttributes } from 'react';

export interface Wallet2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Wallet2: React.FC<Wallet2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M18 11h-2v2h2v-2z' />
            <path
                fillRule='evenodd'
                d='M20 19v-3h1a1 1 0 001-1V9a1 1 0 00-1-1h-1V5a1 1 0 00-1-1H3a1 1 0 00-1 1v14a1 1 0 001 1h16a1 1 0 001-1zm-2-1v-2h-3a4 4 0 010-8h3V6H4v12h14zm-3-8a2 2 0 100 4h5v-4h-5z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Wallet2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Wallet2.displayName = 'Wallet2';
export default Wallet2;
