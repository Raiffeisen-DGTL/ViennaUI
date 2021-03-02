import React, { SVGAttributes } from 'react';

export interface TennisballProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Tennisball: React.FC<TennisballProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm10-8a7.963 7.963 0 00-4.5 1.385A9.965 9.965 0 0110 12a9.965 9.965 0 01-2.5 6.615A7.963 7.963 0 0012 20a7.963 7.963 0 004.5-1.385A9.965 9.965 0 0114 12c0-2.536.945-4.853 2.5-6.615A7.963 7.963 0 0012 4zm6 2.708A7.966 7.966 0 0016 12c0 2.029.755 3.88 2 5.292A7.97 7.97 0 0020 12a7.97 7.97 0 00-2-5.292zM4 12a7.97 7.97 0 012-5.292A7.967 7.967 0 018 12c0 2.029-.754 3.88-2 5.292A7.97 7.97 0 014 12z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Tennisball.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Tennisball.displayName = 'Tennisball';
export default Tennisball;
