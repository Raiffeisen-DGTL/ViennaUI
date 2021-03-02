import React, { SVGAttributes } from 'react';

export interface CafeProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Cafe: React.FC<CafeProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M4.106 6.553A1 1 0 015 6h3v2H5.618l-1 2h14.764l-1-2H17V6h2a1 1 0 01.894.553l2 4A1 1 0 0121 12H3a1 1 0 01-.894-1.447l2-4zM3 21v-7h2v6h2v-5a1 1 0 011-1h8a1 1 0 011 1v5h2v-6h2v7a1 1 0 01-1 1H4a1 1 0 01-1-1zm8-1H9v-4h2v4zm2 0h2v-4h-2v4z'
                clipRule='evenodd'
            />
            <path
                fillRule='evenodd'
                d='M9 2h6v1h2v2h-2a3 3 0 11-6 0V2zm4 2h-2v1a1.001 1.001 0 002 0V4z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Cafe.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Cafe.displayName = 'Cafe';
export default Cafe;
