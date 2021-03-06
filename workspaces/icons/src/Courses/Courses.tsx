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
            <path
                fillRule='evenodd'
                d='M14.3 2.188a3 3 0 00-4.6 0l-.856 1.021a1 1 0 01-.633.349l-1.009.136a3 3 0 00-2.467 3.853l.355 1.16a1 1 0 010 .586l-.355 1.16a3 3 0 002.467 3.853l1.01.136a1 1 0 01.632.349l.856 1.021a3 3 0 004.6 0l.855-1.021a1 1 0 01.633-.349l1.01-.136a3 3 0 002.467-3.853l-.356-1.16a1 1 0 010-.586l.356-1.16a3 3 0 00-2.467-3.853l-1.01-.136a1 1 0 01-.633-.349L14.3 2.188zm-3.067 1.284a1 1 0 011.533 0l.856 1.022a3 3 0 001.899 1.046l1.01.136a1 1 0 01.822 1.284l-.356 1.16a2.999 2.999 0 000 1.76l.356 1.16a1 1 0 01-.823 1.284l-1.009.136a3 3 0 00-1.899 1.046l-.856 1.022a1 1 0 01-1.533 0l-.856-1.022A3 3 0 008.48 12.46l-1.01-.136a1 1 0 01-.822-1.284l.356-1.16a3 3 0 000-1.76l-.356-1.16a1 1 0 01.822-1.284l1.01-.136a3 3 0 001.898-1.046l.856-1.022z'
                clipRule='evenodd'
            />
            <path d='M9 17v3.382l2.553-1.276a1 1 0 01.894 0L15 20.382V17l2-1v6a1 1 0 01-1.447.894L12 21.118l-3.553 1.776A1 1 0 017 22v-6l2 1z' />
        </svg>
    );
};

Courses.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Courses.displayName = 'Courses';
export default Courses;
