import React, { SVGAttributes } from 'react';

export interface CheckmarkRingProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CheckmarkRing: React.FC<CheckmarkRingProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M11.707 15.207l5-5-1.414-1.414L11 13.086l-2.793-2.793-1.414 1.414 3.5 3.5a1 1 0 001.414 0z' />
            <path
                fillRule='evenodd'
                d='M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM4 12a8 8 0 1116 0 8 8 0 01-16 0z'
                clipRule='evenodd'
            />
        </svg>
    );
};

CheckmarkRing.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CheckmarkRing.displayName = 'CheckmarkRing';
export default CheckmarkRing;
