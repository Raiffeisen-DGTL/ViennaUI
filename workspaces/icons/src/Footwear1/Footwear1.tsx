import React, { SVGAttributes } from 'react';

export interface Footwear1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Footwear1: React.FC<Footwear1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M11.573 4.18a1 1 0 00-1.467.373l-.448.894A1 1 0 018.764 6h-1.43A.333.333 0 017 5.667C7 4.747 6.254 4 5.333 4H3a1 1 0 00-1 1v14a1 1 0 001 1h18a1 1 0 001-1v-5.959a3 3 0 00-1.28-2.457L11.574 4.18zM20 16H4v2h16v-2zm0-2v-.959a1 1 0 00-.427-.819l-1.989-1.392-1.877 1.877-1.414-1.414 1.628-1.628-1.278-.894-1.936 1.936-1.414-1.414 1.687-1.687-1.607-1.125A3 3 0 018.763 8h-1.43a2.334 2.334 0 01-2.31-2H4v8h16z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Footwear1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Footwear1.displayName = 'Footwear1';
export default Footwear1;
