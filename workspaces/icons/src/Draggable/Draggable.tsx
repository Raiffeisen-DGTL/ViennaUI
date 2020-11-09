import React, { SVGAttributes } from 'react';

export interface DraggableProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Draggable: React.FC<DraggableProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M2 7h20v2H2V7zm0 4h20v2H2v-2zm0 4h20v2H2v-2z' />
        </svg>
    );
};

Draggable.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Draggable.displayName = 'Draggable';
export default Draggable;
