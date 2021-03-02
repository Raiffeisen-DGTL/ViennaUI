import React, { SVGAttributes } from 'react';

export interface Exchange2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Exchange2: React.FC<Exchange2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M16 9V8h3a3 3 0 000-6h-5v4h-1v2h1v1h-1v2h1v3h2v-3h3V9h-3zm3.382-3.076a1 1 0 01-.383.076h-3V4h3a1 1 0 01.383 1.924z'
                clipRule='evenodd'
            />
            <path d='M6 21v1h2v-1a3 3 0 100-6H6a1 1 0 110-2h2a1 1 0 011 1h2a3 3 0 00-3-3v-1H6v1a3 3 0 100 6h2a1 1 0 110 2H6a1 1 0 01-1-1H3a3 3 0 003 3zM4.272 9.93A8 8 0 0111.999 4V2a10 10 0 00-9.66 7.412l1.933.518zm12.598 8.417a8 8 0 002.857-4.277l1.931.518A10 10 0 0112 22v-2a8 8 0 004.87-1.653z' />
        </svg>
    );
};

Exchange2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Exchange2.displayName = 'Exchange2';
export default Exchange2;
