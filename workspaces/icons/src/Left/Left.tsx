import React, { SVGAttributes } from 'react';

export interface LeftProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Left: React.FC<LeftProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M17 21v-1.414L9.414 12 17 4.414V3h-1.414l-9 9 9 9z' />
        </svg>
    );
};

Left.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Left.displayName = 'Left';
export default Left;
