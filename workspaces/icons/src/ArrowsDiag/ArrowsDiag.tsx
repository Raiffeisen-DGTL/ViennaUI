import React, { SVGAttributes } from 'react';

export interface ArrowsDiagProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ArrowsDiag: React.FC<ArrowsDiagProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M5.929 12.414H9.17v2H3.516a1 1 0 01-1-1V7.757h2V11l8.192-8.192 1.414 1.414-8.192 8.192zm8.9-2.828h5.656a1 1 0 011 1v5.657h-2V13l-8.192 8.192-1.414-1.414 8.192-8.192h-3.243v-2z'
                clipRule='evenodd'
            />
        </svg>
    );
};

ArrowsDiag.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ArrowsDiag.displayName = 'ArrowsDiag';
export default ArrowsDiag;
