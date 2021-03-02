import React, { SVGAttributes } from 'react';

export interface TreeProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Tree: React.FC<TreeProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 21.958h-1V18H8.5A5.488 5.488 0 017.007 7.228 5.5 5.5 0 0118 7.5c0 .299-.026.597-.078.891A5 5 0 0116 18h-2v-2h2a3 3 0 00.526-5.941l-.558-.1-.367-.8.165-.439A3.5 3.5 0 109 7.5c.003.09.012.18.027.269l.085.708-.416.509-.542.054A3.488 3.488 0 008.5 16H11v-5h2v9h4l1 1v1h-6v-.042z' />
        </svg>
    );
};

Tree.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Tree.displayName = 'Tree';
export default Tree;
