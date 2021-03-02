import React, { SVGAttributes } from 'react';

export interface CodeBar1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CodeBar1: React.FC<CodeBar1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M5 4H2v16h3V4zm4 0H7v12h2V4zM7 18h2v2H7v-2zm6 0h-2v2h2v-2zm3 0h2v2h-2v-2zm2-14h-2v12h2V4zm2 0h2v16h-2V4zm-6 0h-3v12h3V4z' />
        </svg>
    );
};

CodeBar1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CodeBar1.displayName = 'CodeBar1';
export default CodeBar1;
