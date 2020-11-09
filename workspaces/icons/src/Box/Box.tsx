import React, { SVGAttributes } from 'react';

export interface BoxProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Box: React.FC<BoxProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M20.021 2C21.114 2 22 2.886 22 3.979v3.063A1.958 1.958 0 0120.042 9H3.971A1.97 1.97 0 012 7.029V3.971A1.97 1.97 0 013.971 2h16.05zM20 7V4H4v3h16zm-1 3h2v9.969C21 21.091 20.09 22 18.969 22H5.031A2.031 2.031 0 013 19.969V10h2v10h14V10zM9 10h6v2H9v-2z' />
        </svg>
    );
};

Box.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Box.displayName = 'Box';
export default Box;
