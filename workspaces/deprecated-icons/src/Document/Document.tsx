import React, { SVGAttributes } from 'react';

export interface DocumentProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Document: React.FC<DocumentProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M7 6h10v2H7V6zm0 4h10v2H7v-2zm12-8a2 2 0 012 2v15.573A2.426 2.426 0 0118.573 22H3v-2h16V4H5v16H3V4a2 2 0 012-2h14z' />
        </svg>
    );
};

Document.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Document.displayName = 'Document';
export default Document;
