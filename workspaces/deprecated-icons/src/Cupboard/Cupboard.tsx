import React, { SVGAttributes } from 'react';

export interface CupboardProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Cupboard: React.FC<CupboardProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M19 20v2h-2v1h-2v-1H9v1H7v-1H5V6h14v14zm-2 0V8h-4v12h4zM7 8v12h4V8H7zm7 5h2v3h-2v-3zm-6 0h2v3H8v-3zM5 3.74a15 15 0 0114 0V5h-2A13 13 0 007 5H5V3.74z' />
        </svg>
    );
};

Cupboard.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Cupboard.displayName = 'Cupboard';
export default Cupboard;
