import React, { SVGAttributes } from 'react';

export interface ArrowsLeftRightProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ArrowsLeftRight: React.FC<ArrowsLeftRightProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M7 10.727V12H5.727l-4-4 4-4H7v1.273L5.273 7H18v2H5.273L7 10.727zM18.273 12l4 4-4 4H17v-1.273L18.727 17H6v-2h12.727L17 13.273V12h1.273z' />
        </svg>
    );
};

ArrowsLeftRight.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ArrowsLeftRight.displayName = 'ArrowsLeftRight';
export default ArrowsLeftRight;
