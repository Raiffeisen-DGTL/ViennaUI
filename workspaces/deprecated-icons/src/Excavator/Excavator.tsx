import React, { SVGAttributes } from 'react';

export interface ExcavatorProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Excavator: React.FC<ExcavatorProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M15.558 6.077L20.38 2.22 22 3v8.16L20.2 14H19l-.83-.55L20 10.7V5.08l-3.242 2.597L17 8v6H2v-4a2 2 0 012-2h4V6a2 2 0 012-2h4l1.558 2.077zM16 17H5a1 1 0 000 2h11a1 1 0 000-2zm0-2a3 3 0 010 6H5a3 3 0 110-6h11zm-3-9h-3v4H4v2h11V8.67L13 6z' />
        </svg>
    );
};

Excavator.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Excavator.displayName = 'Excavator';
export default Excavator;
