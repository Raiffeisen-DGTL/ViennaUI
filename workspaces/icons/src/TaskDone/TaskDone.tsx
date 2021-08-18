import React, { SVGAttributes } from 'react';

export interface TaskDoneProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const TaskDone: React.FC<TaskDoneProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M10 2a1 1 0 00-1 1v3h1a1 1 0 001-1V4h2v1a1 1 0 001 1h1V3a1 1 0 00-1-1h-4zM4 5a1 1 0 011-1h2v2H6v14h6v2H5a1 1 0 01-1-1V5zm14 1h-1V4h2a1 1 0 011 1v9h-2V6zm-.293 15.707l5-5-1.414-1.414L17 19.586l-2.293-2.293-1.414 1.414 3 3a1 1 0 001.414 0z' />
        </svg>
    );
};

TaskDone.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

TaskDone.displayName = 'TaskDone';
export default TaskDone;
