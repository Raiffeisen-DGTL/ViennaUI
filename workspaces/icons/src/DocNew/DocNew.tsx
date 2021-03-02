import React, { SVGAttributes } from 'react';

export interface DocNewProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const DocNew: React.FC<DocNewProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M6 3a1 1 0 011-1h14a1 1 0 011 1v18a1 1 0 01-1 1h-7v-2h6V4H8v6H6V3z' />
            <path d='M8 18v4H6v-4H2v-2h4v-4h2v4h4v2H8z' />
        </svg>
    );
};

DocNew.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

DocNew.displayName = 'DocNew';
export default DocNew;
