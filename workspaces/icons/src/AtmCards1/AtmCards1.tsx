import React, { SVGAttributes } from 'react';

export interface AtmCards1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const AtmCards1: React.FC<AtmCards1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M2 4V2h20v2H2zm4 2v13a1 1 0 001 1h10a1 1 0 001-1V6h2v13a3 3 0 01-3 3H7a3 3 0 01-3-3V6h2zm4 2v12H8V8h2z'
                clipRule='evenodd'
            />
        </svg>
    );
};

AtmCards1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

AtmCards1.displayName = 'AtmCards1';
export default AtmCards1;
