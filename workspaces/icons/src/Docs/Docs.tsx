import React, { SVGAttributes } from 'react';

export interface DocsProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Docs: React.FC<DocsProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M3 1a1 1 0 00-1 1v16h2V3h13V1H3z' />
            <path d='M10 9h8v2h-8V9z' />
            <path
                fillRule='evenodd'
                d='M7 5a1 1 0 00-1 1v16a1 1 0 001 1h14a1 1 0 001-1V6a1 1 0 00-1-1H7zm1 16V7h12v14H8z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Docs.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Docs.displayName = 'Docs';
export default Docs;
