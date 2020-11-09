import React, { SVGAttributes } from 'react';

export interface HeartBrokenProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const HeartBroken: React.FC<HeartBrokenProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M16.61 2a5.53 5.53 0 00-5.53 5.49l1.67 3.64-2.54 2.22 1 4.22c-2.41-1.8-7.12-5.84-7.12-10.08A3.54 3.54 0 017.61 4 3.5 3.5 0 0110 5a7.36 7.36 0 011-1.75 5.52 5.52 0 00-9 4.33c0 6.78 9.08 12.51 9.47 12.75l.56.33.56-.33c.38-.24 9.47-6 9.47-12.75A5.54 5.54 0 0016.61 2zm-3.39 15.45l-.78-3.34 2.8-2.45-2.13-4.47a3.52 3.52 0 017 .34c.03 4.12-4.42 8.05-6.89 9.92z' />
        </svg>
    );
};

HeartBroken.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

HeartBroken.displayName = 'HeartBroken';
export default HeartBroken;
