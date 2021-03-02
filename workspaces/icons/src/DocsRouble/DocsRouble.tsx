import React, { SVGAttributes } from 'react';

export interface DocsRoubleProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const DocsRouble: React.FC<DocsRoubleProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M9 2h11a1 1 0 011 1v15h-2V4H9V2z' />
            <path d='M5 6h11a1 1 0 011 1v14a1 1 0 01-1 1h-3v-2h2V8H5V6z' />
            <path
                fillRule='evenodd'
                d='M7 22v-2h4v-2H7v-2h3a3 3 0 100-6H5v4H3v2h2v2H3v2h2v2h2zm3-8a1.001 1.001 0 000-2H7v2h3z'
                clipRule='evenodd'
            />
        </svg>
    );
};

DocsRouble.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

DocsRouble.displayName = 'DocsRouble';
export default DocsRouble;
