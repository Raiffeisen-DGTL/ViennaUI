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
            <path d='M23 12v-2h-1.1V5.627L19 2.728l-2.9 2.9V10h-1.2V5.627L12 2.728l-2.9 2.9V10H7.9V5.627L5 2.728l-2.9 2.9V10H1v2h1.1v5H1v2h1.1v3h1.8V6.373L5 5.272l1.1 1.1V22h1.8v-3h1.2v3h1.8V6.373l1.1-1.1 1.1 1.1V22h1.8v-3h1.2v3h1.8V6.373l1.1-1.1 1.1 1.1V22h1.8v-3H23v-2h-1.1v-5H23zM7.9 17v-5h1.2v5H7.9zm7 0v-5h1.2v5h-1.2z' />
        </svg>
    );
};

Fence.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Fence.displayName = 'Fence';
export default Fence;
