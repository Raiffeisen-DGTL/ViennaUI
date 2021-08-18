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
            <path
                fillRule='evenodd'
                d='M8.5 18H11v4h6v-2h-4v-2h3a5 5 0 001.929-9.614 5.5 5.5 0 10-10.921-1.18A5.502 5.502 0 008.5 18zm4-14a3.5 3.5 0 00-3.476 3.909 1 1 0 01-.89 1.11A3.5 3.5 0 008.5 16H11v-3h2v3h3a3 3 0 00.541-5.951 1 1 0 01-.758-1.332A3.5 3.5 0 0012.5 4z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Tree.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Tree.displayName = 'Tree';
export default Tree;
