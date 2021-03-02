import React, { SVGAttributes } from 'react';

export interface FeedbackPositiveProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const FeedbackPositive: React.FC<FeedbackPositiveProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M17 11.07a3 3 0 00-1.336-2.496l-.158-.105A2.79 2.79 0 0012 8.802a2.79 2.79 0 00-3.506-.333l-.158.105A3 3 0 007 11.07v.022a3 3 0 001.024 2.258l3.318 2.903a1 1 0 001.316 0l3.318-2.903A3 3 0 0017 11.092v-.022zm-2.445-.832a1 1 0 01.445.832v.022a1 1 0 01-.341.753L12 14.171l-2.659-2.326A1 1 0 019 11.092v-.022a1 1 0 01.445-.832l.159-.105a.79.79 0 011.095.219l.469.703a1 1 0 001.664 0l.469-.703a.79.79 0 011.095-.22l.159.106z'
                clipRule='evenodd'
            />
            <path
                fillRule='evenodd'
                d='M3 4a1 1 0 00-1 1v14a1 1 0 001 1h3v2a1 1 0 001.447.894L13.237 20H21a1 1 0 001-1V5a1 1 0 00-1-1H3zm1 14V6h16v12h-7a.999.999 0 00-.447.106L8 20.382V19a1 1 0 00-1-1H4z'
                clipRule='evenodd'
            />
        </svg>
    );
};

FeedbackPositive.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

FeedbackPositive.displayName = 'FeedbackPositive';
export default FeedbackPositive;
