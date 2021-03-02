import React, { SVGAttributes } from 'react';

export interface ChartLineProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ChartLine: React.FC<ChartLineProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M2 3v17a1 1 0 001 1h17v-2H4V3H2z' />
            <path d='M21 3h-6v2h3.586L14 9.586l-1.293-1.293a1 1 0 00-1.414 0l-6 6 1.414 1.414L12 10.414l1.293 1.293a1 1 0 001.414 0L20 6.414V10h2V4a1 1 0 00-1-1z' />
        </svg>
    );
};

ChartLine.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ChartLine.displayName = 'ChartLine';
export default ChartLine;
