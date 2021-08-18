import React, { SVGAttributes } from 'react';

export interface ChartBar1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ChartBar1: React.FC<ChartBar1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M7 12a1 1 0 011 1v6a1 1 0 01-1 1H3a1 1 0 01-1-1v-6a1 1 0 011-1h4zm14-8a1 1 0 011 1v14a1 1 0 01-1 1h-4a1 1 0 01-1-1V5a1 1 0 011-1h4zm-7 4a1 1 0 011 1v10a1 1 0 01-1 1h-4a1 1 0 01-1-1V9a1 1 0 011-1h4zm-8 6H4v4h2v-4zm14-8h-2v12h2V6zm-7 4h-2v8h2v-8z' />
        </svg>
    );
};

ChartBar1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ChartBar1.displayName = 'ChartBar1';
export default ChartBar1;
