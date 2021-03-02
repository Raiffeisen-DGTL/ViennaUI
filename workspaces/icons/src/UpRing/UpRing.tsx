import React, { SVGAttributes } from 'react';

export interface UpRingProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const UpRing: React.FC<UpRingProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M6.34 17.655l-1.414 1.413A9.97 9.97 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10a9.97 9.97 0 01-2.928 7.07l-1.414-1.414a8 8 0 10-11.317-.001z' />
            <path d='M15.293 12.707l1.414-1.414-4-4a1 1 0 00-1.414 0l-4 4 1.414 1.414L11 10.414V21h2V10.414l2.293 2.293z' />
        </svg>
    );
};

UpRing.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

UpRing.displayName = 'UpRing';
export default UpRing;
