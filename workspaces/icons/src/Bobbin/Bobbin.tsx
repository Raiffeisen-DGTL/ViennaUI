import React, { SVGAttributes } from 'react';

export interface BobbinProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Bobbin: React.FC<BobbinProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 3.8A8.21 8.21 0 003.8 12 8.2 8.2 0 1012 3.8zM12 2a10 10 0 0110 10c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm-1 9h2v2h-2v-2zm1-2a2 2 0 110-4 2 2 0 010 4zm-4.708 3.333a2 2 0 110-4 2 2 0 010 4zm9.375 0a2 2 0 110-4 2 2 0 010 4zM9 18a2 2 0 110-4 2 2 0 010 4zm6 0a2 2 0 110-4 2 2 0 010 4z' />
        </svg>
    );
};

Bobbin.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Bobbin.displayName = 'Bobbin';
export default Bobbin;
