import React, { SVGAttributes } from 'react';

export interface Repair1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Repair1: React.FC<Repair1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M15 3v5a1 1 0 01-1 1h-2v10a3 3 0 11-6 0V9H3a1 1 0 01-1-1V6a1 1 0 01.293-.707l3-3A1 1 0 016 2h8a1 1 0 011 1zM8 9h2v10a1 1 0 11-2 0V9zm5-2H4v-.586L6.414 4H13v3zm4 4a1 1 0 00-1 1v7a3 3 0 106 0v-7a1 1 0 00-1-1h-1V5h1V3h-1V2h-2v1h-1v2h1v6h-1zm1 8v-6h2v6a1 1 0 11-2 0z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Repair1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Repair1.displayName = 'Repair1';
export default Repair1;
