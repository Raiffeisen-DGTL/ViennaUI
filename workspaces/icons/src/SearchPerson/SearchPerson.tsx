import React, { SVGAttributes } from 'react';

export interface SearchPersonProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const SearchPerson: React.FC<SearchPersonProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M6 7a5 5 0 1110 0A5 5 0 016 7zm5-3a3 3 0 100 6 3 3 0 000-6z'
                clipRule='evenodd'
            />
            <path d='M3 22c0-4.402 3.09-9 8.5-9v2C7.473 15 5 18.402 5 22H3z' />
            <path
                fillRule='evenodd'
                d='M17 13a4 4 0 102.032 7.446l2.261 2.261 1.414-1.414-2.26-2.261A4 4 0 0017 13zm-2 4a2 2 0 114 0 2 2 0 01-4 0z'
                clipRule='evenodd'
            />
        </svg>
    );
};

SearchPerson.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

SearchPerson.displayName = 'SearchPerson';
export default SearchPerson;
