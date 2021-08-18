import React, { SVGAttributes } from 'react';

export interface DocRoubleProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const DocRouble: React.FC<DocRoubleProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M6 3a1 1 0 011-1h14a1 1 0 011 1v18a1 1 0 01-1 1h-9v-2h8V4H8v5H6V3z'
                clipRule='evenodd'
            />
            <path
                fillRule='evenodd'
                d='M6 17v2h4v2H6v2H4v-2H2v-2h2v-2H2v-2h2v-4h5a3 3 0 010 6H6zm3-2a1.001 1.001 0 000-2H6v2h3z'
                clipRule='evenodd'
            />
        </svg>
    );
};

DocRouble.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

DocRouble.displayName = 'DocRouble';
export default DocRouble;
