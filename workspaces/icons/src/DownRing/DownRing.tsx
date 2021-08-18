import React, { SVGAttributes } from 'react';

export interface DownRingProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const DownRing: React.FC<DownRingProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M6.84 6.345L5.427 4.932A9.97 9.97 0 002.5 12c0 5.523 4.477 10 10 10s10-4.477 10-10a9.97 9.97 0 00-2.928-7.07l-1.414 1.414A8 8 0 114.5 12a7.97 7.97 0 012.34-5.655z' />
            <path d='M15.793 11.293l1.414 1.414-4 4a1 1 0 01-1.414 0l-4-4 1.414-1.414 2.293 2.293V3h2v10.586l2.293-2.293z' />
        </svg>
    );
};

DownRing.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

DownRing.displayName = 'DownRing';
export default DownRing;
