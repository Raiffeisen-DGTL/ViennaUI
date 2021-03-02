import React, { SVGAttributes } from 'react';

export interface BookProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Book: React.FC<BookProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M4 3a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H6v1a1 1 0 001 1h13v2H7a3 3 0 01-3-3V3zm2 13h12V4H6v12zm10-8H8V6h8v2zm0 4H8v-2h8v2z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Book.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Book.displayName = 'Book';
export default Book;
