import React, { SVGAttributes } from 'react';

export interface Refresh4Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Refresh4: React.FC<Refresh4Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M20.999 11.619L22.629 10h1.358l.03.031v1.409l-4 3.971-4-4V10h1.415l1.564 1.565a8 8 0 10-1.03 4.384l1.452 1.451a10 10 0 11-8.4-15.4 10 10 0 019.98 9.619z' />
        </svg>
    );
};

Refresh4.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Refresh4.displayName = 'Refresh4';
export default Refresh4;
