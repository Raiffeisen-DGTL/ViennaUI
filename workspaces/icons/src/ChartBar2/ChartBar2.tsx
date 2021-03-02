import React, { SVGAttributes } from 'react';

export interface ChartBar2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ChartBar2: React.FC<ChartBar2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M9 4a1 1 0 011-1h4a1 1 0 011 1v16a1 1 0 01-1 1h-4a1 1 0 01-1-1V4zm2 1v14h2V5h-2zm5 6a1 1 0 011-1h4a1 1 0 011 1v9a1 1 0 01-1 1h-4a1 1 0 01-1-1v-9zm2 1v7h2v-7h-2zM3 8a1 1 0 00-1 1v11a1 1 0 001 1h4a1 1 0 001-1V9a1 1 0 00-1-1H3zm1 11v-9h2v9H4z'
                clipRule='evenodd'
            />
        </svg>
    );
};

ChartBar2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ChartBar2.displayName = 'ChartBar2';
export default ChartBar2;
