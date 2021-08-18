import React, { SVGAttributes } from 'react';

export interface InQueueBackProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const InQueueBack: React.FC<InQueueBackProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M21.7 6.4l-2.3 2.3 2.3 2.3-1.4 1.4-3-3a1 1 0 010-1.4l3-3 1.4 1.4zM14 13H3v-2h11v2zM3 19h11v-2H3v2zM14 7H3V5h11v2z' />
        </svg>
    );
};

InQueueBack.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

InQueueBack.displayName = 'InQueueBack';
export default InQueueBack;
