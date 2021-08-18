import React, { SVGAttributes } from 'react';

export interface SortingProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Sorting: React.FC<SortingProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M18.293 10.707L12 4.414l-6.293 6.293-1.414-1.414 7-7a1 1 0 011.414 0l7 7-1.414 1.414zM5.707 13.293L12 19.586l6.293-6.293 1.414 1.414-7 7a1 1 0 01-1.414 0l-7-7 1.414-1.414z' />
        </svg>
    );
};

Sorting.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Sorting.displayName = 'Sorting';
export default Sorting;
