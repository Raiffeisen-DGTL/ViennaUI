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
            <path
                fillRule='evenodd'
                d='M20 8v13a1 1 0 01-1 1H5a1 1 0 01-1-1V3a1 1 0 011-1h9a1 1 0 01.707.293l5 5A1 1 0 0120 8zm-8-4H6v16h12V10h-5a1 1 0 01-1-1V4zm2 .414V8h3.586L14 4.414z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Document.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Document.displayName = 'Document';
export default Document;
