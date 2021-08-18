import React, { SVGAttributes } from 'react';

export interface CosmeticsProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Cosmetics: React.FC<CosmeticsProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M8 11c2.04-.03 4.07.292 6 .952V16H2v-4.048c1.93-.66 3.96-.982 6-.952zm-4 3h8v-.569A17.373 17.373 0 008 13a17.373 17.373 0 00-4 .431V14zm8 3h2v3.042A1.958 1.958 0 0112.042 22H3.958A1.958 1.958 0 012 20.042V17h2v3h8v-3zm5-9.5a8.493 8.493 0 015 8 8.968 8.968 0 01-2.672 6.5H15v-2h3.459A7.12 7.12 0 0020 15.5c0-3.584-2.468-6.5-5.5-6.5a4.824 4.824 0 00-2.794.934A31.418 31.418 0 009.06 9.7 7.471 7.471 0 0112 7.5V3.979A1.98 1.98 0 0113.979 2h1.042A1.98 1.98 0 0117 3.979V7.5zM15 7V4h-1.021l.013 3H15z' />
        </svg>
    );
};

Cosmetics.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Cosmetics.displayName = 'Cosmetics';
export default Cosmetics;
