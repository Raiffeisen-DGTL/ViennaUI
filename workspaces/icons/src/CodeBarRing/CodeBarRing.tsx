import React, { SVGAttributes } from 'react';

export interface CodeBarRingProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CodeBarRing: React.FC<CodeBarRingProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M8 9H6v6h2V9zm2 0H9v6h1V9zm4 0h1v6h-1V9zm4 0h-2v6h2V9zm-7 0h2v6h-2V9z' />
            <path
                fillRule='evenodd'
                d='M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM4 12a8 8 0 1116 0 8 8 0 01-16 0z'
                clipRule='evenodd'
            />
        </svg>
    );
};

CodeBarRing.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CodeBarRing.displayName = 'CodeBarRing';
export default CodeBarRing;
