import React, { SVGAttributes } from 'react';

export interface Document3ArrowProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Document3Arrow: React.FC<Document3ArrowProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M10 4v2H7V4h1a2 2 0 012-2h4a2 2 0 012 2h1v2h-3V4h-4zm9 8.252V6h-1V4h1.016A1.984 1.984 0 0121 5.984v8.268l-2-2zM4.984 6l.004 14H11v2H4.984A1.984 1.984 0 013 20.016V5.984C3 4.888 3.888 4 4.984 4H6v2H4.984zm13.289 8l4 4-4 4H17v-1.273L18.727 19H12v-2h6.727L17 15.273V14h1.273zM7 9h10v2H7V9zm0 4h7v2H7v-2z' />
        </svg>
    );
};

Document3Arrow.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Document3Arrow.displayName = 'Document3Arrow';
export default Document3Arrow;
