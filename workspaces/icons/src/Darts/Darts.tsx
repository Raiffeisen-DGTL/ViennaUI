import React, { SVGAttributes } from 'react';

export interface DartsProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Darts: React.FC<DartsProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M18.949 1.684a1 1 0 00-1.656-.391l-3 3A1 1 0 0014 5v3.586l-1.916 1.916a1.5 1.5 0 101.414 1.414L15.414 10H19a1 1 0 00.707-.293l3-3a1 1 0 00-.39-1.656L19.79 4.21l-.842-2.525zm1.2 4.753L18.586 8H16V5.414l1.563-1.563.488 1.465a1 1 0 00.633.633l1.465.488z'
                clipRule='evenodd'
            />
            <path d='M7.555 5.348A8 8 0 0112 4V2a10 10 0 1010 10h-2A8 8 0 117.555 5.348z' />
            <path d='M9.778 8.674A4 4 0 0112 8V6a6 6 0 106 6h-2a4 4 0 11-6.222-3.326z' />
        </svg>
    );
};

Darts.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Darts.displayName = 'Darts';
export default Darts;
