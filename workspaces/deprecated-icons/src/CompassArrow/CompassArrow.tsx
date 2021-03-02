import React, { SVGAttributes } from 'react';

export interface CompassArrowProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CompassArrow: React.FC<CompassArrowProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M11.614 21.882l-1.864-.344-.894-6.258-6.256-.893-.344-1.865 18-10 1.36 1.36-10.002 18zm-5.79-9.055l4.788.691.7 4.795 6.854-12.342-12.342 6.856z' />
        </svg>
    );
};

CompassArrow.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CompassArrow.displayName = 'CompassArrow';
export default CompassArrow;
