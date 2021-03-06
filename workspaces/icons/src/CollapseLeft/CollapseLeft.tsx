import React, { SVGAttributes } from 'react';

export interface CollapseLeftProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CollapseLeft: React.FC<CollapseLeftProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M13.707 4.707L6.414 12l7.293 7.293-1.414 1.414-8-8a1 1 0 010-1.414l8-8 1.414 1.414z' />
            <path d='M19.707 4.707L12.414 12l7.293 7.293-1.414 1.414-8-8a1 1 0 010-1.414l8-8 1.414 1.414z' />
        </svg>
    );
};

CollapseLeft.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CollapseLeft.displayName = 'CollapseLeft';
export default CollapseLeft;
