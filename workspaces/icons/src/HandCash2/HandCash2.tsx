import React, { SVGAttributes } from 'react';

export interface HandCash2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const HandCash2: React.FC<HandCash2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M3 15a1 1 0 01-1-1V3a1 1 0 011-1h.985a1.947 1.947 0 01.03 0h15.97a2.08 2.08 0 01.03 0H21a1 1 0 011 1v11a1 1 0 01-1 1h-.485l-4.103 5.744A3 3 0 0113.971 22H13v-2h.97a1 1 0 00.814-.419L18.058 15H12v1h-2v-4a1 1 0 10-2 0v7a1 1 0 001 1v2a3 3 0 01-3-3v-4H3zm16.984-2L20 6a2 2 0 01-2-2H6a2 2 0 01-2 2v7h2v-1a3 3 0 116 0v1h7.984z'
                clipRule='evenodd'
            />
        </svg>
    );
};

HandCash2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

HandCash2.displayName = 'HandCash2';
export default HandCash2;
