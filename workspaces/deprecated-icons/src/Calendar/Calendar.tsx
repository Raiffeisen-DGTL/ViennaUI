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
            <path d='M19.016 4A1.984 1.984 0 0121 5.984v14.032A1.984 1.984 0 0119.016 22H4.984A1.984 1.984 0 013 20.016V5.984C3 4.888 3.888 4 4.984 4H7V2h2v5H7V6H4.988v3H19V6h-1V4h1.016zM5 20.016L19.016 20l-.011-9H4.99L5 20.016zM15 7V6h-5V4h5V2h2v5h-2z' />
        </svg>
    );
};

Calendar.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Calendar.displayName = 'Calendar';
export default Calendar;
