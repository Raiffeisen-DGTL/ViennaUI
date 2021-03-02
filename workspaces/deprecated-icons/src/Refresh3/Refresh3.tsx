import React, { SVGAttributes } from 'react';

export interface Refresh3Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Refresh3: React.FC<Refresh3Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M13 2a10 10 0 00-9.981 9.619L1.388 10H.031L0 10.031v1.409l4 3.971 4-4V10H6.586l-1.564 1.565a8 8 0 111.029 4.384L4.6 17.4A10 10 0 1013 2z' />
        </svg>
    );
};

Refresh3.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Refresh3.displayName = 'Refresh3';
export default Refresh3;
