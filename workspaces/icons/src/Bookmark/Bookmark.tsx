import React, { SVGAttributes } from 'react';

export interface BookmarkProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Bookmark: React.FC<BookmarkProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M4 4a1 1 0 011-1h14a1 1 0 011 1v17a1 1 0 01-1.707.707L12 16.414l-6.293 5.293A1 1 0 014 21V4zm2 1v13.586l5.293-4.293a1 1 0 011.414 0L18 18.586V5H6z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Bookmark.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Bookmark.displayName = 'Bookmark';
export default Bookmark;
