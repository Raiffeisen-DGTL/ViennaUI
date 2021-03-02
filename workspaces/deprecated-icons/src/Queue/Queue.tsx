import React, { SVGAttributes } from 'react';

export interface QueueProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Queue: React.FC<QueueProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M10 5h12v2H8l2-2zm-8 7h20v2H2v-2zm0 7h12v2H2v-2zM2 8.646l2.603-2.688L2 3.406V2h1.491l3.94 3.948L3.342 10H2.036L2 8.646z' />
        </svg>
    );
};

Queue.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Queue.displayName = 'Queue';
export default Queue;
