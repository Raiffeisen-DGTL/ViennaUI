import React, { SVGAttributes } from 'react';

export interface KeyboardProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Keyboard: React.FC<KeyboardProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M20.018 7c1.094 0 1.981.888 1.982 1.982v10.036c0 1.094-.886 1.98-1.98 1.982H4a1.982 1.982 0 01-1.982-1.982V8.982C2.018 7.887 2.905 7 4 7h16.018zm0 12l-.002-10H4v10h16.018zM5.016 16.156H19v1.688H5.016v-1.688zM8.15 10.15h1.7v1.7h-1.7v-1.7zm0 3h1.7v1.7h-1.7v-1.7zm3-3h1.7v1.7h-1.7v-1.7zm0 3h1.7v1.7h-1.7v-1.7zm-6-3h1.7v1.7h-1.7v-1.7zm0 3h1.7v1.7h-1.7v-1.7zm12-3h1.7v1.7h-1.7v-1.7zm0 3h1.7v1.7h-1.7v-1.7zm-3-3h1.7v1.7h-1.7v-1.7zm0 3h1.7v1.7h-1.7v-1.7zM11 3h2v3h-2V3z' />
        </svg>
    );
};

Keyboard.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Keyboard.displayName = 'Keyboard';
export default Keyboard;
