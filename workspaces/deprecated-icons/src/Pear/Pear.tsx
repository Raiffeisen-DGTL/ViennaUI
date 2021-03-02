import React, { SVGAttributes } from 'react';

export interface PearProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Pear: React.FC<PearProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M13 5.08a5 5 0 013.89 3.84c.07.356.107.717.11 1.08a1.9 1.9 0 00.66 1.53 6.41 6.41 0 012.44 5.68c-.29 3.33-3.24 5.79-7 5.79H11c-3.81 0-6.76-2.44-7.12-5.77a6.41 6.41 0 012.42-5.7A1.9 1.9 0 007 10a5.82 5.82 0 01.15-1.08A5 5 0 0110 5.42v2.36A2.93 2.93 0 009 10a3.9 3.9 0 01-1.33 3.06A4.43 4.43 0 006 17c.18 2.32 2.3 4 5 4h2.09c2.66 0 4.78-1.7 5-4a4.43 4.43 0 00-1.63-3.89A3.9 3.9 0 0115 10a3 3 0 00-.11-.71A3 3 0 0013 7.12v1.85h-2V2.04h2v3.04zM18 4h-4V3l1-1h4v1l-1 1z' />
        </svg>
    );
};

Pear.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Pear.displayName = 'Pear';
export default Pear;
