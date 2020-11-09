import React, { SVGAttributes } from 'react';

export interface PlusRingProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const PlusRing: React.FC<PlusRingProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M13 11h4v2h-4v4h-2v-4H7v-2h4V7h2v4zm-1-7.106A8.115 8.115 0 003.894 12 8.106 8.106 0 1012 3.894zM12 2a10 10 0 0110 10c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z' />
        </svg>
    );
};

PlusRing.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

PlusRing.displayName = 'PlusRing';
export default PlusRing;
