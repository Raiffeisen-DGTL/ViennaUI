import React, { SVGAttributes } from 'react';

export interface GolfProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Golf: React.FC<GolfProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M19 16a3 3 0 110 6 3 3 0 010-6zm0 4.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-9-4.344c2.162.344 4 1.26 4 2.844 0 2.062-3.11 3-6 3s-6-.938-6-3c0-1.584 1.838-2.5 4-2.844v2.033A3.928 3.928 0 004.025 19c.257.327 1.627 1 3.975 1s3.718-.673 3.975-1A3.928 3.928 0 0010 18.189v-2.033zm-1-6.038V19H7V2.021h2L17.236 6 9 10.118zM12.764 6L9 4.118v3.764L12.764 6z' />
        </svg>
    );
};

Golf.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Golf.displayName = 'Golf';
export default Golf;
