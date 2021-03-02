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
            <path d='M12 5.414L6.414 11H5V9.586l7-7 7 7V11h-1.414L12 5.414zm0 16l-7-7V13h1.414L12 18.586 17.586 13H19v1.414l-7 7z' />
        </svg>
    );
};

Sorting.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Sorting.displayName = 'Sorting';
export default Sorting;
