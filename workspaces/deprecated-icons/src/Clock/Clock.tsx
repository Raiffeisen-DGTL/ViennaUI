import React, { SVGAttributes } from 'react';

export interface ClockProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Clock: React.FC<ClockProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 2c5.52.006 9.994 4.48 10 10 0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 18a8.009 8.009 0 008-8 8 8 0 10-8 8zm1-14v5h4v2h-6V6h2z' />
        </svg>
    );
};

Clock.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Clock.displayName = 'Clock';
export default Clock;
