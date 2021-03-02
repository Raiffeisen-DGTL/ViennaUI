import React, { SVGAttributes } from 'react';

export interface DocVerifiedProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const DocVerified: React.FC<DocVerifiedProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M6 3a1 1 0 011-1h14a1 1 0 011 1v18a1 1 0 01-1 1h-9v-2h8V4H8v8H6V3z'
                clipRule='evenodd'
            />
            <path
                fillRule='evenodd'
                d='M14.207 13.207l-8 8a1 1 0 01-1.414 0l-3.5-3.5 1.414-1.414L5.5 19.086l7.293-7.293 1.414 1.414z'
                clipRule='evenodd'
            />
        </svg>
    );
};

DocVerified.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

DocVerified.displayName = 'DocVerified';
export default DocVerified;
