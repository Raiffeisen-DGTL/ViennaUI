import React, { SVGAttributes } from 'react';

export interface ChartPieProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ChartPie: React.FC<ChartPieProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M19.66 5.572a9.958 9.958 0 00-4.514-3.066 1 1 0 00-1.245.585l-3.598 9.187a1 1 0 001.128 1.345l9.672-1.948a1 1 0 00.792-1.125 9.958 9.958 0 00-2.235-4.978zM12.834 11.3l2.563-6.545a7.966 7.966 0 012.731 2.103 7.966 7.966 0 011.597 3.054L12.833 11.3z'
                clipRule='evenodd'
            />
            <path d='M5.572 4.34a9.963 9.963 0 016.742-2.335l-.787 2.008a8 8 0 108.256 9.837l2.115-.425a9.963 9.963 0 01-3.47 6.235c-4.231 3.55-10.539 2.999-14.089-1.232C.79 14.198 1.341 7.89 5.572 4.34z' />
        </svg>
    );
};

ChartPie.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ChartPie.displayName = 'ChartPie';
export default ChartPie;
