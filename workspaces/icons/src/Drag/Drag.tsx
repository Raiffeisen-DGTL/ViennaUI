import React, { SVGAttributes } from 'react';

export interface DragProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Drag: React.FC<DragProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M3 9h18V7H3v2zm18 4H3v-2h18v2zm0 4H3v-2h18v2z' />
        </svg>
    );
};

Drag.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Drag.displayName = 'Drag';
export default Drag;
