import React, { SVGAttributes } from 'react';

export interface ArrowsTopDownProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ArrowsTopDown: React.FC<ArrowsTopDownProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M8 16.586l2.293-2.293 1.414 1.414-4 4a1 1 0 01-1.414 0l-4-4 1.414-1.414L6 16.586V5h2v11.586zm4.293-8.293l4-4a1 1 0 011.414 0l4 4-1.414 1.414L18 7.414V19h-2V7.414l-2.293 2.293-1.414-1.414z'
                clipRule='evenodd'
            />
        </svg>
    );
};

ArrowsTopDown.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ArrowsTopDown.displayName = 'ArrowsTopDown';
export default ArrowsTopDown;
