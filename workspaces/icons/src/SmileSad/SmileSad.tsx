import React, { SVGAttributes } from 'react';

export interface SmileSadProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const SmileSad: React.FC<SmileSadProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 4a8 8 0 100 16 8 8 0 000-16zm0-2a10 10 0 0110 10c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zM8 15.68a5.85 5.85 0 018 0V17h-1.23a4 4 0 00-5.54 0H8v-1.32zM8 10h2v2H8v-2zm6 0h2v2h-2v-2z' />
        </svg>
    );
};

SmileSad.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

SmileSad.displayName = 'SmileSad';
export default SmileSad;
