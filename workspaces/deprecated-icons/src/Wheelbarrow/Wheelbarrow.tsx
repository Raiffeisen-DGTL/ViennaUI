import React, { SVGAttributes } from 'react';

export interface WheelbarrowProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Wheelbarrow: React.FC<WheelbarrowProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M10.5 15.7a1.8 1.8 0 100 3.6 1.8 1.8 0 000-3.6zm0-1.7a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm4.035-1H6.586L2 8.414V6h14.8l2.667-4H23v2h-2.465l-6 9zm-7.121-2h6.051l2-3H4.414l3 3z' />
        </svg>
    );
};

Wheelbarrow.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Wheelbarrow.displayName = 'Wheelbarrow';
export default Wheelbarrow;
