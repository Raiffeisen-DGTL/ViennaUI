import React, { SVGAttributes } from 'react';

export interface HitProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Hit: React.FC<HitProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M12 1a1 1 0 01.925.62l2.986 7.252 4.456-3.646a1 1 0 011.617.953L20 17.09V21a1 1 0 01-1 1H5a1 1 0 01-1-1v-3.91L2.016 6.18a1 1 0 011.617-.953L8.09 8.872l2.986-7.253A1 1 0 0112 1zM6 18v2h12v-2H6zm12.166-2l1.364-7.505-3.397 2.779a1 1 0 01-1.558-.393L12 4.626l-2.575 6.255a1 1 0 01-1.558.393L4.47 8.494 5.835 16h12.33z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Hit.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Hit.displayName = 'Hit';
export default Hit;
