import React, { SVGAttributes } from 'react';

export interface Terminal3Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Terminal3: React.FC<Terminal3Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M9.15 14.15h1.7v1.7h-1.7v-1.7zm0 3h1.7v1.7h-1.7v-1.7zm-3-3h1.7v1.7h-1.7v-1.7zm0 3h1.7v1.7h-1.7v-1.7zM11.984 20h2.981v.018A1.983 1.983 0 0112.982 22h-9A1.983 1.983 0 012 20.018V3.982A1.983 1.983 0 013.986 2h9c1.095 0 1.982.887 1.983 1.982V11L13 13H5.016v-2H13V4H4v16h7.984zM23 15v2h-6.868L18 18.869V20h-.999l-4.133-4 4.001-4H18v1.131L16.132 15H23z' />
        </svg>
    );
};

Terminal3.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Terminal3.displayName = 'Terminal3';
export default Terminal3;
