import React, { SVGAttributes } from 'react';

export interface CalendarAddProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CalendarAdd: React.FC<CalendarAddProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M8 3v2H4a1 1 0 00-1 1v7h16v6h-7v2h8a1 1 0 001-1V6a1 1 0 00-1-1h-4V3h-2v2h-4V3H8zm11 4h-3v2h-2V7h-4v2H8V7H5v4h14V7z'
                clipRule='evenodd'
            />
            <path d='M17 16a1 1 0 11-2 0 1 1 0 012 0zM5 18v-3h2v3h3v2H7v3H5v-3H2v-2h3z' />
        </svg>
    );
};

CalendarAdd.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CalendarAdd.displayName = 'CalendarAdd';
export default CalendarAdd;
