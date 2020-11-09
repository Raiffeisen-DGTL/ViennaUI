import React, { SVGAttributes } from 'react';

export interface LeftArrowProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const LeftArrow: React.FC<LeftArrowProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M21 11H6.414L13 4.414V3h-1.414l-9 9 9 9H13v-1.414L6.414 13H21z' />
        </svg>
    );
};

LeftArrow.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

LeftArrow.displayName = 'LeftArrow';
export default LeftArrow;
