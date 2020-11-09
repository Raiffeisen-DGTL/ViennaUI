import React, { SVGAttributes } from 'react';

export interface ExitProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Exit: React.FC<ExitProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M8 2h13v16l-7 4v-4H8v-2h6V6l3.5-2H8V2zm11 14.839V5.446l-3 1.715v11.393l3-1.715zM7.798 14L3.8 10.003 7.761 6h1.196l.027.026.002 1.154L7.185 9H13v2H7.201l1.796 1.796L8.999 14H7.798z' />
        </svg>
    );
};

Exit.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Exit.displayName = 'Exit';
export default Exit;
