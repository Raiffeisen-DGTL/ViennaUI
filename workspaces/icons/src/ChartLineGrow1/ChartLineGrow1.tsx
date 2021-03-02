import React, { SVGAttributes } from 'react';

export interface ChartLineGrow1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ChartLineGrow1: React.FC<ChartLineGrow1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M3 3v17a1 1 0 001 1h17v-2H5V3H3z' />
            <path d='M20 3h-6v2h3.586L6.793 15.793l1.414 1.414L19 6.414V10h2V4a1 1 0 00-1-1z' />
        </svg>
    );
};

ChartLineGrow1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ChartLineGrow1.displayName = 'ChartLineGrow1';
export default ChartLineGrow1;
