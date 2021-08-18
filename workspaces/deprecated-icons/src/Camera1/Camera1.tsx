import React, { SVGAttributes } from 'react';

export interface Camera1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Camera1: React.FC<Camera1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M22 18h-1l-1-1v-3l1-1h1v5zM6 13h2v2H6v-2zm10.969-3A2.031 2.031 0 0119 12.031V19a2 2 0 01-2 2H4.969A1.954 1.954 0 013 19v-6.953A2 2 0 015.016 10h9.953V8H6.141L4 5.766V9H2V4h2.969l2 2h7.9c1.16 0 2.1.94 2.1 2.1V10zM17 19v-7.012H4.969V19H17z' />
        </svg>
    );
};

Camera1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Camera1.displayName = 'Camera1';
export default Camera1;
