import React, { SVGAttributes } from 'react';

export interface RatingProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Rating: React.FC<RatingProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M5.293 2.293A1 1 0 016 2h12a1 1 0 011 1c0 .334-.006.668-.017 1H22a1 1 0 011 1c0 2.468-1.227 4.776-3.304 6.438-.404.323-.945.612-1.424.846-.332.162-.685.322-.986.457l-.25.114C16.479 14 15.794 14.995 15 15.722V20h2v2H7v-2h2v-4.278c-.795-.728-1.48-1.722-2.035-2.867a81.728 81.728 0 00-.25-.114 34.339 34.339 0 01-.987-.457c-.479-.234-1.02-.523-1.424-.846C2.227 9.776 1 7.468 1 5a1 1 0 011-1h3.017A29.127 29.127 0 015 3a1 1 0 01.293-.707zM11 20h2v-3.131a3.867 3.867 0 01-2 0V20zm7.058-9.864A24.37 24.37 0 0018.844 6h2.063c-.267 1.425-1.103 2.79-2.46 3.876-.1.08-.232.167-.39.26zM5.156 6a24.37 24.37 0 00.786 4.136 3.372 3.372 0 01-.388-.26C4.196 8.79 3.36 7.425 3.094 6h2.062zm1.862-2c.11 2.967.703 5.727 1.647 7.773C9.748 14.12 11.022 15 12 15c.978 0 2.252-.881 3.335-3.227.944-2.046 1.537-4.806 1.647-7.773H7.018z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Rating.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Rating.displayName = 'Rating';
export default Rating;
