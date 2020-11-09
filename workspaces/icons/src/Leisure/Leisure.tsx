import React, { SVGAttributes } from 'react';

export interface LeisureProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Leisure: React.FC<LeisureProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M20.5 4.5a5.446 5.446 0 011.444 4.679 8.544 8.544 0 01-2.5 4.863 8.5 8.5 0 01-4.987 2.5l-6.766 2.181-4.157 4.157-1.415-1.414 4.137-4.137 1.329-4.632c.139.01.278.021.42.021.867 0 1.722-.2 2.5-.581.114.585.397 1.124.813 1.551 1.562 1.561 4.573 1.084 6.717-1.06a6.545 6.545 0 001.93-3.707 3.5 3.5 0 00-.87-3.01A3.308 3.308 0 0016.7 5a4.824 4.824 0 00-.624.044c-.88.13-1.719.453-2.457.947a5.66 5.66 0 00-.715-1.909 7.942 7.942 0 012.914-1.021A5.449 5.449 0 0120.5 4.5zM8.328 16.625l2.508-.804A4.552 4.552 0 019.08 14l-.752 2.625zM8 11a4 4 0 110-8 4 4 0 010 8zm0-6a2 2 0 100 4 2 2 0 000-4z' />
        </svg>
    );
};

Leisure.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Leisure.displayName = 'Leisure';
export default Leisure;
