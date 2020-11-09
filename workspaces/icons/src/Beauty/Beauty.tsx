import React, { SVGAttributes } from 'react';

export interface BeautyProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Beauty: React.FC<BeautyProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M11 9h2v5h-2V9zm3-2h2v5h-2V7zm5.718-2.8a7.511 7.511 0 01.004 10.604l-2.362 2.36a7.492 7.492 0 01-9.8.691l-3.853 3.852-1.414-1.414 3.839-3.835a7.506 7.506 0 01.618-9.9L9.111 4.2a7.509 7.509 0 0110.607 0zM18.3 13.39a5.5 5.5 0 00-7.775-7.78L8.16 7.972a5.5 5.5 0 007.778 7.778l2.362-2.36z' />
        </svg>
    );
};

Beauty.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Beauty.displayName = 'Beauty';
export default Beauty;
