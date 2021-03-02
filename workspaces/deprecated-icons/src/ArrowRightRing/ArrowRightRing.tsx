import React, { SVGAttributes } from 'react';

export interface ArrowRightRingProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ArrowRightRing: React.FC<ArrowRightRingProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 2.832a10 10 0 00-9.8 8h2.063a7.993 7.993 0 11-.194 3h8.746l-1.8 1.821v1.153l.027.026h1.2l3.961-4-4-4H11v1.2l1.8 1.8H2.051c-.033.33-.051.663-.051 1 0 5.523 4.477 10 10 10s10-4.477 10-10-4.477-10-10-10z' />
        </svg>
    );
};

ArrowRightRing.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ArrowRightRing.displayName = 'ArrowRightRing';
export default ArrowRightRing;
