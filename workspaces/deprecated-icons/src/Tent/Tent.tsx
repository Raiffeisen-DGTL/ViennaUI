import React, { SVGAttributes } from 'react';

export interface TentProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Tent: React.FC<TentProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M4.1 19a9.371 9.371 0 006.9-9h2a9.43 9.43 0 006.82 9H20v-3.32l-8-10.4-8 10.4V19h.1zm4.483 0h6.834A11.537 11.537 0 0112 14.623 11.537 11.537 0 018.583 19zM12 2l10 13v6H2v-6L12 2z' />
        </svg>
    );
};

Tent.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Tent.displayName = 'Tent';
export default Tent;
