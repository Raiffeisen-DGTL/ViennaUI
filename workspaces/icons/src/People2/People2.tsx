import React, { SVGAttributes } from 'react';

export interface People2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const People2: React.FC<People2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M2 5.5a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0zM5.5 4a1.5 1.5 0 100 3 1.5 1.5 0 000-3z'
                clipRule='evenodd'
            />
            <path d='M17.5 10c-.222 0-.44.01-.654.03v2.012c.208-.028.426-.042.654-.042 2.769 0 4.5 2.202 4.5 5h2c0-3.602-2.348-7-6.5-7zM12 15c-4.152 0-6.5 3.398-6.5 7h2c0-2.798 1.731-5 4.5-5s4.5 2.202 4.5 5h2c0-3.602-2.348-7-6.5-7z' />
            <path
                fillRule='evenodd'
                d='M18.5 2a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM17 5.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm-8.5 5a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0zM12 9a1.5 1.5 0 100 3 1.5 1.5 0 000-3z'
                clipRule='evenodd'
            />
            <path d='M6.5 10c.222 0 .44.01.654.03v2.012A5.054 5.054 0 006.5 12C3.73 12 2 14.202 2 17H0c0-3.602 2.348-7 6.5-7z' />
        </svg>
    );
};

People2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

People2.displayName = 'People2';
export default People2;
