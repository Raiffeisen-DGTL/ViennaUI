import React, { SVGAttributes } from 'react';

export interface Document3Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Document3: React.FC<Document3Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M7 9h10v2H7V9zm0 4h7v2H7v-2zm12.016-9A1.984 1.984 0 0121 5.984v14.031A1.985 1.985 0 0119.016 22H4.984A1.985 1.985 0 013 20.015V5.984C3 4.888 3.888 4 4.984 4H6v2H4.988v14H19V6h-1V4h1.016zM10 4v2H7V4h1a2 2 0 012-2h4a2 2 0 012 2h1v2h-3V4h-4z' />
        </svg>
    );
};

Document3.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Document3.displayName = 'Document3';
export default Document3;
