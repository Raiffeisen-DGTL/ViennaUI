import React, { SVGAttributes } from 'react';

export interface BackRingProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const BackRing: React.FC<BackRingProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M17.655 17.66l1.413 1.414A9.97 9.97 0 0112 22C6.477 22 2 17.523 2 12S6.477 2 12 2a9.97 9.97 0 017.07 2.928l-1.414 1.414a8 8 0 10-.001 11.317z' />
            <path d='M12.707 8.707l-1.414-1.414-4 4a1 1 0 000 1.414l4 4 1.414-1.414L10.414 13H21v-2H10.414l2.293-2.293z' />
        </svg>
    );
};

BackRing.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

BackRing.displayName = 'BackRing';
export default BackRing;
