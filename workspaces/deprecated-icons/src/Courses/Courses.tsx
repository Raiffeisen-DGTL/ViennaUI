import React, { SVGAttributes } from 'react';

export interface CoursesProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Courses: React.FC<CoursesProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M14 16.771a8.2 8.2 0 002-1.696V22h-1l-3-2-3 2H8v-6.988a8.7 8.7 0 002 1.72v2.4L12 18l2 1.132v-2.361zM12.031 16a3.19 3.19 0 01-2.638-1.395 1.189 1.189 0 00-.9-.518 3.192 3.192 0 01-2.639-4.569 1.185 1.185 0 000-1.036A3.192 3.192 0 018.5 3.913c.362-.027.691-.217.895-.517a3.192 3.192 0 015.277 0c.205.302.536.493.9.518A3.191 3.191 0 0118.2 8.482a1.185 1.185 0 000 1.036 3.191 3.191 0 01-2.639 4.569 1.189 1.189 0 00-.9.517A3.19 3.19 0 0112.031 16zm0-12a1.176 1.176 0 00-.986.522 3.173 3.173 0 01-2.4 1.385 1.193 1.193 0 00-.986 1.706 3.177 3.177 0 010 2.774 1.193 1.193 0 00.985 1.706c.97.07 1.855.58 2.4 1.386a1.227 1.227 0 001.972 0 3.173 3.173 0 012.4-1.385 1.191 1.191 0 00.986-1.706 3.177 3.177 0 010-2.774 1.192 1.192 0 00-.985-1.706 3.175 3.175 0 01-2.4-1.386A1.176 1.176 0 0012.031 4z' />
        </svg>
    );
};

Courses.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Courses.displayName = 'Courses';
export default Courses;
