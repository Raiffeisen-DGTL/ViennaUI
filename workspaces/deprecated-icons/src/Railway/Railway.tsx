import React, { SVGAttributes } from 'react';

export interface RailwayProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Railway: React.FC<RailwayProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M8 12.999h2v2H8v-2zm6 0h2v2h-2v-2zM19 16a2 2 0 01-2 2h-.382l2 4h-2.236l-2-4H9.618l-2 4H5.382l2-4H7a2 2 0 01-2-2V5a2 2 0 012-2h2.276A1.992 1.992 0 0111 2h2a1.99 1.99 0 011.724 1H17a2 2 0 012 2v11zM7 16h10V5h-4V4h-2v1H7v5h9v2H7v4z' />
        </svg>
    );
};

Railway.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Railway.displayName = 'Railway';
export default Railway;
