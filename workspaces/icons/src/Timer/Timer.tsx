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
            <path d='M11 10v5h2v-5h-2z' />
            <path
                fillRule='evenodd'
                d='M13 4h2V2H9v2h2v1.558a8.45 8.45 0 00-3.681 1.346L5.707 5.293 4.293 6.707 5.786 8.2a8.5 8.5 0 1012.428 0l1.493-1.493-1.414-1.414-1.612 1.611A8.45 8.45 0 0013 5.558V4zM5.5 14a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Timer.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Timer.displayName = 'Timer';
export default Timer;
