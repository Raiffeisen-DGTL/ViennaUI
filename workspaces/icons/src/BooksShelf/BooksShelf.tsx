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
            <path
                fillRule='evenodd'
                d='M12 4a1 1 0 00-1 1H8a1 1 0 00-1-1H3a1 1 0 00-1 1v12H1v2h3v2h2v-2h12v2h2v-2h3v-2h-1V6a1 1 0 00-1-1h-4a1 1 0 00-1-1h-4zM8 17h3V7H8v10zm-4 0h2V6H4v11zm9 0V6h2v11h-2zm4-10v10h3V7h-3z'
                clipRule='evenodd'
            />
        </svg>
    );
};

BooksShelf.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

BooksShelf.displayName = 'BooksShelf';
export default BooksShelf;
