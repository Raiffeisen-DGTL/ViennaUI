import React, { SVGAttributes } from 'react';

export interface BooksShelfProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const BooksShelf: React.FC<BooksShelfProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M11.979 3.178V2h10v15h-10V3.344L7.675 17.548l-5.742-1.74L6.279 1.452l5.7 1.726zm6 12.022h2.2V3.8h-2.2v11.4zm-2 0V3.8h-2.2v11.4h2.2zm0 4.8h-9v2h-2v-2H1.021v-2h21.958v2h-5v2h-2v-2zM7.484 3.7l-3.31 10.9 2.3.7 3.31-10.9-2.3-.7z' />
        </svg>
    );
};

BooksShelf.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

BooksShelf.displayName = 'BooksShelf';
export default BooksShelf;
