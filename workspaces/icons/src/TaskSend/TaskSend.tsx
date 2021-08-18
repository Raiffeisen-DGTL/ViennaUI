import React, { SVGAttributes } from 'react';

export interface TaskSendProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const TaskSend: React.FC<TaskSendProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M10 2a1 1 0 00-1 1v3h1a1 1 0 001-1V4h2v1a1 1 0 001 1h1V3a1 1 0 00-1-1h-4zM4 5a1 1 0 011-1h2v2H6v14h10v2H5a1 1 0 01-1-1V5zm14 1h-1V4h2a1 1 0 011 1v6.5h-2V6z' />
            <path d='M21.707 16.293l-3-3-1.414 1.414L18.586 16H12v2h6.586l-1.293 1.293 1.414 1.414 3-3a1 1 0 000-1.414z' />
        </svg>
    );
};

TaskSend.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

TaskSend.displayName = 'TaskSend';
export default TaskSend;
