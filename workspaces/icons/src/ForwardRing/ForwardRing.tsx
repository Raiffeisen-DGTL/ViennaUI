import React, { SVGAttributes } from 'react';

export interface ForwardRingProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ForwardRing: React.FC<ForwardRingProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M6.345 17.66l-1.413 1.414A9.97 9.97 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2a9.97 9.97 0 00-7.07 2.928l1.414 1.414a8 8 0 11.001 11.317z' />
            <path d='M11.293 8.707l1.414-1.414 4 4a1 1 0 010 1.414l-4 4-1.414-1.414L13.586 13H3v-2h10.586l-2.293-2.293z' />
        </svg>
    );
};

ForwardRing.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ForwardRing.displayName = 'ForwardRing';
export default ForwardRing;
