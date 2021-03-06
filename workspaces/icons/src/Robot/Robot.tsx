import React, { SVGAttributes } from 'react';

export interface RobotProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Robot: React.FC<RobotProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M10 16h4v-2h-4v2z' />
            <path
                fillRule='evenodd'
                d='M7 2a1.5 1.5 0 011 2.618V6h8V4.618a1.5 1.5 0 112 0V6a3 3 0 013 3v8a3.001 3.001 0 01-2 2.83V22h-2v-2H7v2H5v-2.17A3.001 3.001 0 013 17V9a3 3 0 013-3V4.618A1.5 1.5 0 017 2zm12 7.17a3 3 0 100 5.659V17a1 1 0 01-1 1H6a1 1 0 01-1-1v-2.17a3 3 0 100-5.66V9a1 1 0 011-1h12a1 1 0 011 1v.17zM19 12a1 1 0 11-2 0 1 1 0 012 0zM6 11a1 1 0 100 2 1 1 0 000-2z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Robot.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Robot.displayName = 'Robot';
export default Robot;
