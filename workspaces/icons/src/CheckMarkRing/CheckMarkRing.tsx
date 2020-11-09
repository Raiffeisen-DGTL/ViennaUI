import React, { SVGAttributes } from 'react';

export interface CheckMarkRingProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CheckMarkRing: React.FC<CheckMarkRingProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 15.414l-5-5V9h1.414L12 12.586 20.586 4H22v1.414l-10 10zm7.74-5.759l1.486-1.485a10.032 10.032 0 11-2.932-3.922l-1.345 1.345A8.131 8.131 0 1020.106 12a8.02 8.02 0 00-.366-2.345z' />
        </svg>
    );
};

CheckMarkRing.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CheckMarkRing.displayName = 'CheckMarkRing';
export default CheckMarkRing;
