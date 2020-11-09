import React, { SVGAttributes } from 'react';

export interface ArrowLeftRingProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ArrowLeftRing: React.FC<ArrowLeftRingProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 22a10 10 0 009.8-8h-2.063a7.993 7.993 0 11.194-3h-8.746l1.8-1.82V8.026L12.957 8h-1.2L7.8 12l4 4H13v-1.2L11.2 13h10.749c.033-.329.051-.663.051-1 0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10z' />
        </svg>
    );
};

ArrowLeftRing.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ArrowLeftRing.displayName = 'ArrowLeftRing';
export default ArrowLeftRing;
