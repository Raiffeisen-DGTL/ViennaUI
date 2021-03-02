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
            <path d='M10 4v2H7V4h1a2 2 0 012-2h4a2 2 0 012 2h1v2h-3V4h-4zm9 12.5V6h-1V4h1.016A1.984 1.984 0 0121 5.984V14.5l-2 2zM4.984 6l.004 14H11.5l2 2H4.984A1.984 1.984 0 013 20.016V5.984C3 4.888 3.888 4 4.984 4H6v2H4.984zM7 9h10v2H7V9zm0 4h7v2H7v-2zm16 4.414l-6 6-3-3V19h1.414L17 20.586 21.586 16H23v1.414z' />
        </svg>
    );
};

Task.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Task.displayName = 'Task';
export default Task;
