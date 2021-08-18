import React, { SVGAttributes } from 'react';

export interface TaskProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Task: React.FC<TaskProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M9 3a1 1 0 011-1h4a1 1 0 011 1v3h-1a1 1 0 01-1-1V4h-2v1a1 1 0 01-1 1H9V3z' />
            <path d='M5 4a1 1 0 00-1 1v16a1 1 0 001 1h14a1 1 0 001-1V5a1 1 0 00-1-1h-2v2h1v14H6V6h1V4H5z' />
        </svg>
    );
};

Task.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Task.displayName = 'Task';
export default Task;
