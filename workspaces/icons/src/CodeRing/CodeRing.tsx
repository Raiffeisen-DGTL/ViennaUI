import React, { SVGAttributes } from 'react';

export interface CodeRingProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CodeRing: React.FC<CodeRingProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M9.61 9h2v6h-2V9zM6 9h1v6H6V9zm1.8 0h1v6h-1V9zm4.7 0h1v6h-1V9zm1.72 0h1v6h-1V9zM16 9h2v6h-2V9zm-4 13C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-18a8 8 0 100 16 8 8 0 000-16z' />
        </svg>
    );
};

CodeRing.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CodeRing.displayName = 'CodeRing';
export default CodeRing;
