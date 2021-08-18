import React, { SVGAttributes } from 'react';

export interface SearchProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Search: React.FC<SearchProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M11 3a8 8 0 016.32 12.905l3.887 3.888-1.414 1.414-3.888-3.886A8 8 0 1111 3zm0 2a6 6 0 100 12 6 6 0 000-12z' />
        </svg>
    );
};

Search.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Search.displayName = 'Search';
export default Search;
