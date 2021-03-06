import React, { SVGAttributes } from 'react';

export interface TennisProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Tennis: React.FC<TennisProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M15.096 2.647a4 4 0 00-6.004 5.286 24.131 24.131 0 00-.728 2.119l-2.062 6.777-4.42 4.419 1.415 1.414 4.42-4.42 5.797-1.764c1.199-.365 2.443-.689 3.575-1.238a9.162 9.162 0 002.472-1.77c1.411-1.412 2.276-3.155 2.499-4.863.223-1.71-.197-3.442-1.439-4.683-1.448-1.448-3.542-1.775-5.525-1.277zm.95 1.843a4 4 0 01-5.257 4.615c-.535 1.617-.255 3.117.64 4.011.711.712 1.776 1.03 3.01.87 1.234-.161 2.58-.804 3.707-1.93 1.127-1.127 1.77-2.473 1.93-3.708.161-1.233-.157-2.298-.869-3.01-.737-.737-1.873-1.057-3.162-.848zm-6.031 10.04c.257.258.536.48.832.669l-2.159.657.657-2.157c.189.294.411.573.67.832zm.707-10.606a2 2 0 112.828 2.828 2 2 0 01-2.828-2.828z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Tennis.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Tennis.displayName = 'Tennis';
export default Tennis;
