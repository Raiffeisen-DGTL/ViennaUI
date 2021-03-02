import React, { SVGAttributes } from 'react';

export interface CodeBar2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CodeBar2: React.FC<CodeBar2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M5 4H2v16h3V4zm3 0H7v16h1V4zm7 0h1v16h-1V4zm7 0h-2v16h2V4zm-5 0h2v16h-2V4zm-4 0h-3v16h3V4z' />
        </svg>
    );
};

CodeBar2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CodeBar2.displayName = 'CodeBar2';
export default CodeBar2;
