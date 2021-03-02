import React, { SVGAttributes } from 'react';

export interface TheaterOutProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const TheaterOut: React.FC<TheaterOutProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M11.649 2.064a1 1 0 01.702 0L19 4.557V4a1 1 0 112 0v2a1 1 0 01-1.351.936L12 4.068 4.351 6.936A1 1 0 013 6V4a1 1 0 012 0v.557l6.649-2.493z' />
            <path d='M7 11h2v6h2v-6h2v6h2v-6h2v6h2v-6h2V9h-8V7a1 1 0 10-2 0v2H3v2h2v6h2v-6zm14 10v-2H3v2h18z' />
        </svg>
    );
};

TheaterOut.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

TheaterOut.displayName = 'TheaterOut';
export default TheaterOut;
