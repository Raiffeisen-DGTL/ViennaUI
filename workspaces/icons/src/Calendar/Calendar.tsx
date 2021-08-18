import React, { SVGAttributes } from 'react';

export interface CalendarProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Calendar: React.FC<CalendarProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M10 3v2h4V3h2v2h4a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1h4V3h2zm8.999 10h-14L5 19h14l-.001-6zM16 15a1 1 0 110 2 1 1 0 010-2zM8 7H5l-.001 4h14L19 7h-3v2h-2V7h-4v2H8V7z' />
        </svg>
    );
};

Calendar.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Calendar.displayName = 'Calendar';
export default Calendar;
