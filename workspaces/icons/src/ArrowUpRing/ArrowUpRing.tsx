import React, { SVGAttributes } from 'react';

export interface ArrowUpRingProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ArrowUpRing: React.FC<ArrowUpRingProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M2 12.832a10 10 0 008 9.8v-2.063a7.993 7.993 0 113 .194v-8.746l1.82 1.8h1.154L16 13.79v-1.2l-4-3.962-4 4v1.2h1.2l1.8-1.8v10.754c.329.033.663.05 1 .05 5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10z' />
        </svg>
    );
};

ArrowUpRing.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ArrowUpRing.displayName = 'ArrowUpRing';
export default ArrowUpRing;
