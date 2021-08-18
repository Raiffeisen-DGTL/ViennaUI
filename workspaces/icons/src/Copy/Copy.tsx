import React, { SVGAttributes } from 'react';

export interface CopyProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Copy: React.FC<CopyProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M4 3a1 1 0 00-1 1v12a1 1 0 001 1h1V5h12V4a1 1 0 00-1-1H4z' />
            <path
                fillRule='evenodd'
                d='M8 7a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V8a1 1 0 00-1-1H8zm1 12V9h10v10H9z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Copy.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Copy.displayName = 'Copy';
export default Copy;
