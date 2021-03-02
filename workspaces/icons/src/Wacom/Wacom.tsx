import React, { SVGAttributes } from 'react';

export interface WacomProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Wacom: React.FC<WacomProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M3 4a1 1 0 00-1 1v14a1 1 0 001 1h11v-2H4V6h16v10h2V5a1 1 0 00-1-1H3z' />
            <path d='M11.293 12.707l9 9 1.414-1.414-9-9-1.414 1.414z' />
        </svg>
    );
};

Wacom.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Wacom.displayName = 'Wacom';
export default Wacom;
