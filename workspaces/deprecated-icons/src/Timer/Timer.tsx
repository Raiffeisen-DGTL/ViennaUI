import React, { SVGAttributes } from 'react';

export interface TimerProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Timer: React.FC<TimerProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M17.852 8.563h-.002a8 8 0 11-11.7 0L4.294 6.707l1.414-1.418 1.98 1.98a7.95 7.95 0 013.313-1.2V4h-1V2h4v2h-1v2.069a7.95 7.95 0 013.313 1.204l1.98-1.98 1.414 1.414-1.856 1.856zM12.001 20a6 6 0 100-12 6 6 0 000 12zm-1-11h2v5h-2V9z' />
        </svg>
    );
};

Timer.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Timer.displayName = 'Timer';
export default Timer;
