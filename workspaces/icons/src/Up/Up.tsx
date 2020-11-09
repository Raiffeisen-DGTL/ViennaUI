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
            <path d='M3 17h1.414L12 9.414 19.586 17H21v-1.414l-9-9-9 9z' />
        </svg>
    );
};

Up.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Up.displayName = 'Up';
export default Up;
