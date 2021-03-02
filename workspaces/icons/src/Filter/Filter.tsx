import React, { SVGAttributes } from 'react';

export interface FilterProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Filter: React.FC<FilterProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M3 7h18V5H3v2zm16 6H5v-2h14v2zm-2 6H7v-2h10v2z' />
        </svg>
    );
};

Filter.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Filter.displayName = 'Filter';
export default Filter;
