import React, { SVGAttributes } from 'react';

export interface ArrowsDiagonalProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ArrowsDiagonal: React.FC<ArrowsDiagonalProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M16.35 8.8l-.9-.9.9-.9h5.657v5.657l-.9.9-.9-.9v-2.443l-9 9L9.793 17.8l9-9H16.35zm-8.693 8.135H2v-5.657l.9-.9.9.9v2.443l9-9 1.414 1.415-9 8.999h2.443l.9.9-.9.9z' />
        </svg>
    );
};

ArrowsDiagonal.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ArrowsDiagonal.displayName = 'ArrowsDiagonal';
export default ArrowsDiagonal;
