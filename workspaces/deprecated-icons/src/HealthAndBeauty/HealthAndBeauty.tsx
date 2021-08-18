import React, { SVGAttributes } from 'react';

export interface HealthAndBeautyProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const HealthAndBeauty: React.FC<HealthAndBeautyProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M14 9v2a4 4 0 014 4c0 2.251-1.846 5-4 5a2.881 2.881 0 01-1.487-.442L12 19.251l-.513.307A2.89 2.89 0 0110 20c-2.154 0-4-2.749-4-5a3.99 3.99 0 015.6-3.661l.4.174.4-.174c.195-.08.395-.144.6-.192V5.989A3.994 3.994 0 009.01 2H4v2.011A3.994 3.994 0 007.99 8H11v1.086A5.862 5.862 0 0010 9a6.006 6.006 0 00-6 6c0 3.237 2.621 7 6 7a4.718 4.718 0 002-.453A4.72 4.72 0 0014 22c3.379 0 6-3.763 6-7a6.006 6.006 0 00-6-6zM6 4.011V4h3.01A1.992 1.992 0 0111 5.989L7.99 6A1.992 1.992 0 016 4.011z' />
        </svg>
    );
};

HealthAndBeauty.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

HealthAndBeauty.displayName = 'HealthAndBeauty';
export default HealthAndBeauty;
