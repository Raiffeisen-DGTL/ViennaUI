import React, { SVGAttributes } from 'react';

export interface VolleyballProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Volleyball: React.FC<VolleyballProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10A10 10 0 0012 2zm7.656 7.087a7.944 7.944 0 01-7.471 5.283c-.1 0-.194-.009-.29-.015a8.023 8.023 0 01-.882-.986 9.764 9.764 0 006.7-7.24 8.226 8.226 0 011.943 2.958zM14.5 19.245A7.953 7.953 0 016.553 11.3c0-.214.031-.42.051-.629.439.036.873.11 1.3.218a9.743 9.743 0 009.306 7.44c-.331.27-.683.513-1.052.728a7.8 7.8 0 01-1.658.188zm-4.9-8.932A9.718 9.718 0 0013.24 3.9a8.124 8.124 0 012.859 1 7.953 7.953 0 01-6.023 6.852 7.9 7.9 0 01-.476-1.439zm1.179-4.268a9.627 9.627 0 00-2.9-.816c-.158-.018-.312-.012-.469-.022a8.153 8.153 0 014.026-1.379 7.824 7.824 0 01-.657 2.217zm-3.106.973c.74.088 1.462.279 2.148.568a8 8 0 01-1.6 1.523 9.8 9.8 0 00-3.839-.136 8.23 8.23 0 011.067-1.89 7.827 7.827 0 012.224-.065zM3.8 12c.002-.354.028-.707.076-1.058.3-.084.605-.151.913-.2-.012.186-.036.368-.036.557.005 3.656 2.06 7 5.318 8.659A8.207 8.207 0 013.8 12zm15.136 4.354a7.745 7.745 0 01-1.585.183 7.876 7.876 0 01-3.047-.616 9.734 9.734 0 005.896-3.985V12a8.138 8.138 0 01-1.264 4.354z' />
        </svg>
    );
};

Volleyball.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Volleyball.displayName = 'Volleyball';
export default Volleyball;
