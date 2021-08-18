import React, { SVGAttributes } from 'react';

export interface DocSignCheckedProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const DocSignChecked: React.FC<DocSignCheckedProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M11 8a2 2 0 11-4 0 2 2 0 014 0z' />
            <path
                fillRule='evenodd'
                d='M8.992 2a6 6 0 015.344 8.744A6.006 6.006 0 0112 13.191V16h1a1 1 0 011 1v4a1 1 0 01-1 1H7a1 1 0 01-1-1v-7.8a6.006 6.006 0 01-.79-9.852A6 6 0 018.992 2zM12 18h-2v-6.075l.598-.262a4.018 4.018 0 001.96-1.834 4 4 0 10-7.11.01 3.998 3.998 0 001.951 1.83l.601.262V20h4v-2zm10.707-5.293l-4 4a1 1 0 01-1.414 0l-2-2 1.414-1.414L18 14.586l3.293-3.293 1.414 1.414z'
                clipRule='evenodd'
            />
        </svg>
    );
};

DocSignChecked.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

DocSignChecked.displayName = 'DocSignChecked';
export default DocSignChecked;
