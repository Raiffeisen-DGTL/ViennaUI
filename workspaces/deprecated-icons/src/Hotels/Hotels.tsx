import React, { SVGAttributes } from 'react';

export interface HotelsProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Hotels: React.FC<HotelsProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M16 13h4a2 2 0 012 2v5a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h10a2 2 0 012 2v5zm-2 7V8H4v12h10zm6 0v-5h-4v5h4zM5 11h8v2H5v-2zM2 3h2v2H2V3zm3 0h2v2H5V3zm3 0h2v2H8V3zm3 0h2v2h-2V3zm3 0h2v2h-2V3zM5 15h8v2H5v-2z' />
        </svg>
    );
};

Hotels.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Hotels.displayName = 'Hotels';
export default Hotels;
