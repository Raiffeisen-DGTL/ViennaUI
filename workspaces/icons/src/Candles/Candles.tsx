import React, { SVGAttributes } from 'react';

export interface CandlesProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Candles: React.FC<CandlesProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M11.15 5.74c2.34 2.84 5 6.85 5 9.22a5 5 0 01-1.51 3.58c-.37-1.89-1.07-4.06-2.36-4.95l-1.14-.78-1.14.78c-1.26.87-1.95 3.09-2.31 5A5 5 0 016.16 15c0-2.39 2.66-6.39 5-9.22l-.01-.04zm.01-2.96s-7 7.44-7 12.25a7 7 0 005.15 6.75c0-1.32.76-5.72 1.85-6.47 1.18.81 1.9 5.15 1.84 6.48A7 7 0 0018.16 15c0-4.78-7-12.25-7-12.25v.03z' />
        </svg>
    );
};

Candles.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Candles.displayName = 'Candles';
export default Candles;
