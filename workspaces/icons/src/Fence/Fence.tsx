import React, { SVGAttributes } from 'react';

export interface FenceProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Fence: React.FC<FenceProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M7.707 3.293a1 1 0 00-1.414 0l-2 2A1 1 0 004 6v3H2v2h2v5H2v2h2v2h2V6.414l1-1 1 1V20h2v-2h4v2h2V6.414l1-1 1 1V20h2v-2h2v-2h-2v-5h2V9h-2V6a1 1 0 00-.293-.707l-2-2a1 1 0 00-1.414 0l-2 2A1 1 0 0014 6v3h-4V6a1 1 0 00-.293-.707l-2-2zM10 11v5h4v-5h-4z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Fence.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Fence.displayName = 'Fence';
export default Fence;
