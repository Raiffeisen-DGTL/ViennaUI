import React, { SVGAttributes } from 'react';

export interface RefreshProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Refresh: React.FC<RefreshProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M8 10v1.273l-4 4-4-4V10h1.273l1.741 1.74a8.982 8.982 0 0116.261-5.015l-1.431 1.43a6.99 6.99 0 00-12.829 3.558L6.727 10H8zm12-1.272l4 3.999V14h-1.273l-1.741-1.74a8.982 8.982 0 01-16.262 5.015l1.432-1.431a6.99 6.99 0 0012.829-3.557L17.273 14H16v-1.272l4-4z' />
        </svg>
    );
};

Refresh.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Refresh.displayName = 'Refresh';
export default Refresh;
