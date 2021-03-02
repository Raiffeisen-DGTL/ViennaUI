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
            <path
                fillRule='evenodd'
                d='M8 7a1 1 0 011-1h6a1 1 0 011 1v4a1 1 0 01-1 1H9a1 1 0 01-1-1V7zm2 1v2h4V8h-4z'
                clipRule='evenodd'
            />
            <path d='M9 16h6v-2H9v2z' />
            <path
                fillRule='evenodd'
                d='M4 3a1 1 0 011-1h14a1 1 0 011 1v17h1v2H3v-2h1V3zm2 17h12V4H6v16z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Terminal.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Terminal.displayName = 'Terminal';
export default Terminal;
