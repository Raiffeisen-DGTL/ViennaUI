import React, { SVGAttributes } from 'react';

export interface AppleProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Apple: React.FC<AppleProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M13 6a5 5 0 00-5-5H3v1a5 5 0 005 5h3v1.335c-1.217-.357-2.578-.229-3.627.258-2.024.94-3.372 2.886-3.372 5.407 0 2.95 1.515 5.648 3.92 7.28h.002a4.142 4.142 0 004.077.333 4.128 4.128 0 004.076-.332l.002-.001c2.406-1.632 3.92-4.33 3.92-7.28 0-2.521-1.348-4.468-3.372-5.407-1.048-.487-2.41-.615-3.626-.259V6zM5.17 3A3.001 3.001 0 008 5h2.83A3.001 3.001 0 008 3H5.17zM11 13v-2.503c-.757-.448-1.91-.496-2.785-.09-1.325.615-2.214 1.858-2.214 3.593 0 2.253 1.157 4.346 3.042 5.624.366.246.78.376 1.205.376.451 0 .86-.136 1.187-.36l.565-.386.564.386c.327.224.736.36 1.187.36.427 0 .84-.13 1.205-.376C16.841 18.346 18 16.253 18 14c0-1.735-.89-2.978-2.215-3.593-.875-.406-2.027-.358-2.784.09V13h-2z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Apple.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Apple.displayName = 'Apple';
export default Apple;
