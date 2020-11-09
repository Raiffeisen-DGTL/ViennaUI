import React, { SVGAttributes } from 'react';

export interface Schedule2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Schedule2: React.FC<Schedule2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M21 19V5a2 2 0 00-2-2h-3a2 2 0 00-2 2v14h-3V9h2V7h-2a2 2 0 00-2 2v10H6v-7h2v-2H6a2 2 0 00-2 2v7H2v2h20v-2h-1zm-2 0h-3V5h3v14z' />
        </svg>
    );
};

Schedule2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Schedule2.displayName = 'Schedule2';
export default Schedule2;
