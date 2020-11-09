import React, { SVGAttributes } from 'react';

export interface RepairsProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Repairs: React.FC<RepairsProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M20.047 5C21.126 5 22 5.874 22 6.953v4.094A1.953 1.953 0 0120.047 13H13v1h-2v-.875A2.124 2.124 0 0113.125 11H20V7h-1v1.031A1.968 1.968 0 0117.031 10H4.969A1.969 1.969 0 013 8.031V7H2V5h1V3.969A1.97 1.97 0 014.969 2h12.062A1.969 1.969 0 0119 3.969V5h1.047zM17 8V4H5v4h12zm-7 9v-2h4v2h-1v5h-2v-5h-1z' />
        </svg>
    );
};

Repairs.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Repairs.displayName = 'Repairs';
export default Repairs;
