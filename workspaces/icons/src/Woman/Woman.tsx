import React, { SVGAttributes } from 'react';

export interface WomanProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Woman: React.FC<WomanProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M19 14l-2-1.66V9A5 5 0 007 9v3.34L5 14V9a7 7 0 1114 0v5zm-5-6.92L16 8v1a4 4 0 11-8 0V8l2-1v2a2 2 0 104 0V7.08zM6.5 22H4.45l1.16-5.24A3.52 3.52 0 019.06 14H15a3.51 3.51 0 013.45 2.76L19.61 22h-2.05l-1.06-4.8A1.53 1.53 0 0015 16H9.06a1.51 1.51 0 00-1.49 1.2L6.5 22z' />
        </svg>
    );
};

Woman.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Woman.displayName = 'Woman';
export default Woman;
