import React, { SVGAttributes } from 'react';

export interface TerminalProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Terminal: React.FC<TerminalProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M20 3c1.095 0 1.982.887 1.982 1.982v14.036A1.982 1.982 0 0120 21H3.982A1.983 1.983 0 012 19.018V4.982C2 3.888 2.888 3.001 3.982 3H20zM4 19h16v-7H5v-2h15V5H4v14zm11.85-5.85v1.7h-1.7v-1.7h1.7zm0 3v1.7h-1.7v-1.7h1.7zm3-3v1.7h-1.7v-1.7h1.7zm0 3v1.7h-1.7v-1.7h1.7zm-6-3v1.7h-1.7v-1.7h1.7zm0 3v1.7h-1.7v-1.7h1.7zM8.3 14.7H6.7v1.6h1.6v-1.6zM10 13v5H5v-5h5z' />
        </svg>
    );
};

Terminal.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Terminal.displayName = 'Terminal';
export default Terminal;
