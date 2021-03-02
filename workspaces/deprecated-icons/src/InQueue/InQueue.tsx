import React, { SVGAttributes } from 'react';

export interface InQueueProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const InQueue: React.FC<InQueueProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M2.3 6.4l2.3 2.3L2.3 11l1.4 1.4 3-3c.4-.4.4-1 0-1.4l-3-3-1.4 1.4zM10 13h11v-2H10v2zm11 6H10v-2h11v2zM10 7h11V5H10v2z' />
        </svg>
    );
};

InQueue.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

InQueue.displayName = 'InQueue';
export default InQueue;
