import React, { SVGAttributes } from 'react';

export interface TheaterProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Theater: React.FC<TheaterProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M21 2h1v14h-2V4H4v12H2V2h19zm-5 4v.5a17.38 17.38 0 002.82 9.5h-2.33a19.28 19.28 0 01-2.44-8.11A19.81 19.81 0 0112 8a19.81 19.81 0 01-2-.11A19.28 19.28 0 017.51 16H5.18A17.38 17.38 0 008 6.54v-1A18.16 18.16 0 0012 6a18.16 18.16 0 004-.46V6zM4 17h1a2 2 0 012 2H2a2 2 0 012-2zm5 0h1a2 2 0 012 2H7a2 2 0 012-2zm5 0h1a2 2 0 012 2h-5a2 2 0 012-2zm5 0h1a2 2 0 012 2h-5a2 2 0 012-2zM4 20h1a2 2 0 012 2H2a2 2 0 012-2zm5 0h1a2 2 0 012 2H7a2 2 0 012-2zm5 0h1a2 2 0 012 2h-5a2 2 0 012-2zm5 0h1a2 2 0 012 2h-5a2 2 0 012-2z' />
        </svg>
    );
};

Theater.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Theater.displayName = 'Theater';
export default Theater;
