import React, { SVGAttributes } from 'react';

export interface ScheduleProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Schedule: React.FC<ScheduleProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M21 19v-7a2 2 0 00-2-2h-2v2h2v7h-3V5a2 2 0 00-2-2h-3a2 2 0 00-2 2v14H6v-9h2V8H6a2 2 0 00-2 2v9H2v2h21v-2h-2zM14 9v10h-3V5h3v4z' />
        </svg>
    );
};

Schedule.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Schedule.displayName = 'Schedule';
export default Schedule;
