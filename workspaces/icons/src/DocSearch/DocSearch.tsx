import React, { SVGAttributes } from 'react';

export interface DocSearchProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const DocSearch: React.FC<DocSearchProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M18 3a1 1 0 00-1-1H3a1 1 0 00-1 1v18a1 1 0 001 1h6v-2H4V4h12v5h2V3z'
                clipRule='evenodd'
            />
            <path
                fillRule='evenodd'
                d='M11 16a5 5 0 119.172 2.757l2.535 2.536-1.414 1.414-2.536-2.535A5 5 0 0111 16zm5-3a3 3 0 100 6 3 3 0 000-6z'
                clipRule='evenodd'
            />
        </svg>
    );
};

DocSearch.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

DocSearch.displayName = 'DocSearch';
export default DocSearch;
