import React, { SVGAttributes } from 'react';

export interface Terminal2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Terminal2: React.FC<Terminal2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M14.15 12.15h1.7v1.7h-1.7v-1.7zm0 3h1.7v1.7h-1.7v-1.7zm3-3h1.7v1.7h-1.7v-1.7zm0 3h1.7v1.7h-1.7v-1.7zM13 17h-1.131L10 15.132V22H8v-6.868L6.131 17H5v-.999l4-4.133 4 4.001V17zm7-15c1.095 0 1.982.887 1.982 1.982v14.036A1.982 1.982 0 0120 20h-9v-2h9v-7H5.016V9H20V4H4v14h3v2H3.982A1.983 1.983 0 012 18.018V3.982C2 2.888 2.888 2.001 3.982 2H20z' />
        </svg>
    );
};

Terminal2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Terminal2.displayName = 'Terminal2';
export default Terminal2;
