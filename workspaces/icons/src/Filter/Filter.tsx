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
            <path d='M2 5h20v2H2V5zm2 6h16v2H4v-2zm2 6h12v2H6v-2z' />
        </svg>
    );
};

Filter.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Filter.displayName = 'Filter';
export default Filter;
