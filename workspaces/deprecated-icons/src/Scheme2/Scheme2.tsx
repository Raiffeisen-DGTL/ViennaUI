import React, { SVGAttributes } from 'react';

export interface Scheme2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Scheme2: React.FC<Scheme2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M20.022 2A1.98 1.98 0 0122 3.982v5.049A1.966 1.966 0 0120.036 11h-3.072A1.966 1.966 0 0115 9.031V3.982c0-1.093.885-1.98 1.978-1.982h3.044zm0 7l-.002-5H17v5h3.022zm0 4A1.98 1.98 0 0122 14.982v5.049A1.966 1.966 0 0120.036 22h-3.072A1.966 1.966 0 0115 20.031v-5.049c0-1.093.885-1.98 1.978-1.982h3.044zm0 7l-.002-5H17v5h3.022zM8.018 6C9.112 6 9.999 6.888 10 7.982v8.036A1.983 1.983 0 018.018 18H3.982A1.983 1.983 0 012 16.018V7.982C2 6.888 2.888 6.001 3.982 6h4.036zm0 10l-.002-8H4v8h4.018zM11 9.781V7.25L14 5v2.531l-3 2.25zm0 6.918v-2.531l3 2.098v2.531l-3-2.098z' />
        </svg>
    );
};

Scheme2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Scheme2.displayName = 'Scheme2';
export default Scheme2;
