import React, { SVGAttributes } from 'react';

export interface ShieldProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Shield: React.FC<ShieldProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M20 4a15.178 15.178 0 01-6-1.441V4.67c1.596.67 3.28 1.109 5 1.3v6.713a5.947 5.947 0 01-3.306 5.348L13 19.382V1.991h-2A14.344 14.344 0 014 4H3v8.686a7.936 7.936 0 004.411 7.137l4.59 2.3 4.586-2.293A7.936 7.936 0 0021 12.686V4h-1zm-9 15.382l-2.694-1.348A5.947 5.947 0 015 12.686V5.973c2.076-.258 4.1-.834 6-1.708v15.117z' />
        </svg>
    );
};

Shield.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Shield.displayName = 'Shield';
export default Shield;
