import React, { SVGAttributes } from 'react';

export interface CollapseRightProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CollapseRight: React.FC<CollapseRightProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M10.29 4.704l7.293 7.293-7.293 7.293 1.414 1.414 8-8a1 1 0 000-1.414l-8-8-1.414 1.414z' />
            <path d='M4.29 4.704l7.293 7.293L4.29 19.29l1.414 1.414 8-8a1 1 0 000-1.414l-8-8L4.29 4.704z' />
        </svg>
    );
};

CollapseRight.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CollapseRight.displayName = 'CollapseRight';
export default CollapseRight;
