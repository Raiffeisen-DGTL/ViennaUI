import React, { SVGAttributes } from 'react';

export interface StrollerProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Stroller: React.FC<StrollerProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M4.1 10.1L3.43 7H2V5h3l.91 4H13V2h3a7 7 0 010 14h-5a7 7 0 01-6.9-5.9zM21 9a5 5 0 00-5-5h-1v7H6.42A5 5 0 0011 14h5a5 5 0 005-5zM7 16a3 3 0 110 6 3 3 0 010-6zm0 4.4a1.4 1.4 0 100-2.8 1.4 1.4 0 000 2.8zM20 16a3 3 0 110 6 3 3 0 010-6zm0 4.4a1.4 1.4 0 100-2.8 1.4 1.4 0 000 2.8zM11 18h5v2h-5v-2z' />
        </svg>
    );
};

Stroller.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Stroller.displayName = 'Stroller';
export default Stroller;
