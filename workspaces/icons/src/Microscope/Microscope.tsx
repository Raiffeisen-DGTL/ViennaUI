import React, { SVGAttributes } from 'react';

export interface MicroscopeProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Microscope: React.FC<MicroscopeProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M15.707 2.293l.793.793 1.293-1.293 1.414 1.414L17.914 4.5l.793.793a1 1 0 010 1.414l-1.7 1.7A7.5 7.5 0 0111.516 21H17v2H7v-2h4.483A7.51 7.51 0 017.7 19.965 7.5 7.5 0 015.5 18H3v-2h8v2H8.338a5.502 5.502 0 008.284-6.504 5.501 5.501 0 00-1.031-1.672l-4.884 4.883a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414l8-8a1 1 0 011.414 0zM15 4.414L8.414 11 10 12.586 16.586 6 15 4.414z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Microscope.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Microscope.displayName = 'Microscope';
export default Microscope;
