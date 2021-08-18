import React, { SVGAttributes } from 'react';

export interface LampProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Lamp: React.FC<LampProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M13.969 20h-3.938A2.031 2.031 0 018 17.969v-.75a3.446 3.446 0 00-1.039-2.366 6.98 6.98 0 01-1.875-5.966A7 7 0 0119 10a6.951 6.951 0 01-1.981 4.873A3.462 3.462 0 0016 17.282v.687C16 19.091 15.09 20 13.969 20zM10 18h4v-.718c.01-1.425.58-2.79 1.585-3.8a5 5 0 00-4.2-8.443A5 5 0 008.4 13.464a5.425 5.425 0 011.6 3.755V18zm-1 3h6a2 2 0 01-2 2h-2a2 2 0 01-2-2zm3-13.1A2.1 2.1 0 009.9 10H8.1A3.905 3.905 0 0112 6.1v1.8z' />
        </svg>
    );
};

Lamp.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Lamp.displayName = 'Lamp';
export default Lamp;
