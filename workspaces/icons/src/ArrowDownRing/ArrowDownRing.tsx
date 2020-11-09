import React, { SVGAttributes } from 'react';

export interface ArrowDownRingProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ArrowDownRing: React.FC<ArrowDownRingProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M22 12a10 10 0 00-8-9.8v2.063a7.993 7.993 0 11-3-.194v8.746l-1.82-1.8H8.026L8 11.043v1.2l4 3.957 4-4V11h-1.2L13 12.8V2.051A10.023 10.023 0 0012 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10z' />
        </svg>
    );
};

ArrowDownRing.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ArrowDownRing.displayName = 'ArrowDownRing';
export default ArrowDownRing;
