import React, { SVGAttributes } from 'react';

export interface DesignProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Design: React.FC<DesignProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M20.293 20.707L12 12.414V11h1.414l8.293 8.293a1 1 0 01-1.414 1.414zM4 16h9.52l2 2H3.859A1.859 1.859 0 012 16.141V4.084C2 2.934 2.932 2.001 4.083 2h15.834C21.067 2 22 2.933 22 4.084v12.062c.002.36-.103.714-.3 1.016l-1.7-1.7V4.084A.083.083 0 0019.917 4H4.083A.083.083 0 004 4.084V16z' />
        </svg>
    );
};

Design.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Design.displayName = 'Design';
export default Design;
