import React, { SVGAttributes } from 'react';

export interface ChartBarGrow2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ChartBarGrow2: React.FC<ChartBarGrow2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M16 6a1 1 0 011-1h4a1 1 0 011 1v14a1 1 0 01-1 1h-4a1 1 0 01-1-1V6zm2 1v12h2V7h-2zM2 14a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1H3a1 1 0 01-1-1v-6zm2 1v4h2v-4H4zm5-5a1 1 0 011-1h4a1 1 0 011 1v10a1 1 0 01-1 1h-4a1 1 0 01-1-1V10zm2 1v8h2v-8h-2zm0-6.586l-6.293 6.293-1.414-1.414L9.586 3H7.5V1H12a1 1 0 011 1v4.5h-2V4.414z'
                clipRule='evenodd'
            />
        </svg>
    );
};

ChartBarGrow2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ChartBarGrow2.displayName = 'ChartBarGrow2';
export default ChartBarGrow2;
