import React, { SVGAttributes } from 'react';

export interface UpProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Up: React.FC<UpProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M11.041 22h2V5.515l5.551 5.832 1.45-1.378-7.29-7.658a1 1 0 00-1.447-.001L4 9.968l1.447 1.38 5.594-5.864V22z' />
        </svg>
    );
};

Up.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Up.displayName = 'Up';
export default Up;
