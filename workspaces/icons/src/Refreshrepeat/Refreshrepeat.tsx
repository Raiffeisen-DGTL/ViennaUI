import React, { SVGAttributes } from 'react';

export interface RefreshrepeatProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Refreshrepeat: React.FC<RefreshrepeatProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M21.043 2.896h-2v3.498A9 9 0 1021 12h-2a7 7 0 11-1.327-4.104h-3.63v2h6a1 1 0 001-1v-6z' />
        </svg>
    );
};

Refreshrepeat.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Refreshrepeat.displayName = 'Refreshrepeat';
export default Refreshrepeat;
