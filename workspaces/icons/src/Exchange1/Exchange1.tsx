import React, { SVGAttributes } from 'react';

export interface Exchange1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Exchange1: React.FC<Exchange1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M17 2V1h2v1a3 3 0 013 3h-2a1 1 0 00-1-1h-2a1 1 0 100 2h2a3 3 0 110 6v1h-2v-1a3 3 0 01-3-3h2a1 1 0 001 1h2a1 1 0 100-2h-2a3 3 0 110-6zM6.673 13.31a3 3 0 013.448.569l1.415-1.415A5 5 0 003.1 15H2l-1 2h2.101a5 5 0 009.23 1.5l-1.733-1a3 3 0 01-5.426-.5H8l1-2H5.172a3.003 3.003 0 011.501-1.69zm-1.4-3.38A8 8 0 0113 4V2a10 10 0 00-9.66 7.412l1.933.518zm12.597 8.417a8 8 0 002.857-4.276l1.932.517A10 10 0 0113 22v-2a8 8 0 004.87-1.653z' />
        </svg>
    );
};

Exchange1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Exchange1.displayName = 'Exchange1';
export default Exchange1;
