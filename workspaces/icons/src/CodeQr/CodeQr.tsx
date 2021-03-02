import React, { SVGAttributes } from 'react';

export interface CodeQrProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CodeQr: React.FC<CodeQrProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M2 3a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H3a1 1 0 01-1-1V3zm2 1v2h2V4H4zm12-1a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V3zm2 1v2h2V4h-2zM3 16a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 00-1-1H3zm1 4v-2h2v2H4z'
                clipRule='evenodd'
            />
            <path d='M10 2h2v2h-2V2zm2 4V4h2v4h-2v2h-2V6h2z' />
            <path
                fillRule='evenodd'
                d='M10 12v-2H6v2H4v-2H2v2h2v2h4v2h4v2h-2v4h2v-2h4v2h2v-2h4v-2h-4v-2h2v-2h2v-2h-2v-2h-4V8h-2v2h-2v2h-2zm4 0h-2v4h2v2h2v2h2v-2h-2v-2h2v-2h2v-2h-2v2h-2v2h-2v-4zm0 0h2v-2h-2v2zm-4 0v2H8v-2h2z'
                clipRule='evenodd'
            />
        </svg>
    );
};

CodeQr.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CodeQr.displayName = 'CodeQr';
export default CodeQr;
