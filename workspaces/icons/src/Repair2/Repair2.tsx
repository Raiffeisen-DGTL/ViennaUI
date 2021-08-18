import React, { SVGAttributes } from 'react';

export interface Repair2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Repair2: React.FC<Repair2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h13a1 1 0 011 1v2h1a3 3 0 013 3v3a3 3 0 01-3 3h-7v6h-2v-6a2 2 0 012-2h7a1 1 0 001-1v-3a1 1 0 00-1-1h-1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V9H1V7h2V5zm2 1v4h11V6H5z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Repair2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Repair2.displayName = 'Repair2';
export default Repair2;
