import React, { SVGAttributes } from 'react';

export interface OnLaptopProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const OnLaptop: React.FC<OnLaptopProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M11.293 12.707a1 1 0 001.414 0l4-4-1.414-1.414L13 9.586V2h-2v7.586L8.707 7.293 7.293 8.707l4 4z' />
            <path d='M3 5a1 1 0 011-1h5v2H5v9h14V6h-4V4h5a1 1 0 011 1v11a1 1 0 01-1 1H4a1 1 0 01-1-1V5zM1 20v-1h22v1a1 1 0 01-1 1H2a1 1 0 01-1-1z' />
        </svg>
    );
};

OnLaptop.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

OnLaptop.displayName = 'OnLaptop';
export default OnLaptop;
