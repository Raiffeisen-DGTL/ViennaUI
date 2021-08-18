import React, { SVGAttributes } from 'react';

export interface HeartProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Heart: React.FC<HeartProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M16.6 2a5.54 5.54 0 00-5.53 5.54h2a3.53 3.53 0 117.06 0c0 4.87-6.22 9.48-8 10.72-1.81-1.24-8-5.85-8-10.72A3.54 3.54 0 017.6 4 3.5 3.5 0 0110 5a7.36 7.36 0 011-1.75 5.52 5.52 0 00-9 4.33c.07 6.73 9.13 12.42 9.54 12.7l.56.33.56-.33c.39-.24 9.47-6 9.47-12.75A5.54 5.54 0 0016.6 2z' />
        </svg>
    );
};

Heart.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Heart.displayName = 'Heart';
export default Heart;
