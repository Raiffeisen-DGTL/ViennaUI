import React, { SVGAttributes } from 'react';

export interface People1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const People1: React.FC<People1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M16.5 3a4.5 4.5 0 100 9 4.5 4.5 0 000-9zM14 7.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z'
                clipRule='evenodd'
            />
            <path d='M16.5 13c-4.41 0-7 3.534-7 7h2c0-2.534 1.86-5 5-5 3.14 0 5 2.466 5 5h2c0-3.466-2.59-7-7-7zm-16 8c0-3.38 2.329-7 6.5-7 .997 0 1.91.213 2.716.597l-.859 1.806A4.28 4.28 0 007 16c-2.75 0-4.5 2.38-4.5 5h-2z' />
            <path
                fillRule='evenodd'
                d='M7 5a4 4 0 100 8 4 4 0 000-8zM5 9a2 2 0 114 0 2 2 0 01-4 0z'
                clipRule='evenodd'
            />
        </svg>
    );
};

People1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

People1.displayName = 'People1';
export default People1;
