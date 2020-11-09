import React, { SVGAttributes } from 'react';

export interface ScheduleGrowthProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ScheduleGrowth: React.FC<ScheduleGrowthProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M20.2 5.315A30.853 30.853 0 012 11.975v-2A28.888 28.888 0 0018.893 3.8h-2.559l-.895-.874.926-.926H22v5.68l-.837.837-.963-.941v-2.26zM21 20h1v2H2v-2h2v-2a2 2 0 012-2h2v2H6v2h3v-5a2 2 0 012-2h2v2h-2v5h3v-8a2 2 0 012-2h3a2 2 0 012 2v8zm-2 0v-8h-3v8h3z' />
        </svg>
    );
};

ScheduleGrowth.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ScheduleGrowth.displayName = 'ScheduleGrowth';
export default ScheduleGrowth;
