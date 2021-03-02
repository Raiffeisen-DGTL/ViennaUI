import React, { SVGAttributes } from 'react';

export interface OtherProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Other: React.FC<OtherProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M6.2 10.8H3.8v2.4h2.4v-2.4zM2 10.792c0-.99.803-1.791 1.792-1.792h2.417C7.199 9 8 9.803 8 10.792v2.417A1.79 1.79 0 016.209 15H3.792c-.99 0-1.791-.802-1.792-1.791v-2.417zm11.2.008h-2.4v2.4h2.4v-2.4zM9 10.792c0-.99.803-1.791 1.792-1.792h2.417c.99 0 1.791.803 1.791 1.792v2.417A1.79 1.79 0 0113.209 15h-2.417c-.99 0-1.791-.802-1.792-1.791v-2.417zm11.2.008h-2.4v2.4h2.4v-2.4zm-4.2-.008c0-.99.803-1.791 1.792-1.792h2.417c.99 0 1.791.803 1.791 1.792v2.417A1.79 1.79 0 0120.209 15h-2.417c-.99 0-1.791-.802-1.792-1.791v-2.417z' />
        </svg>
    );
};

Other.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Other.displayName = 'Other';
export default Other;
