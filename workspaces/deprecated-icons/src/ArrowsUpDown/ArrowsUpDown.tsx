import React, { SVGAttributes } from 'react';

export interface ArrowsUpDownProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ArrowsUpDown: React.FC<ArrowsUpDownProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M13.273 7H12V5.727l4-4 4 4V7h-1.273L17 5.273V18h-2V5.273L13.273 7zM12 18.273l-4 4-4-4V17h1.273L7 18.727V6h2v12.727L10.727 17H12v1.273z' />
        </svg>
    );
};

ArrowsUpDown.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ArrowsUpDown.displayName = 'ArrowsUpDown';
export default ArrowsUpDown;
