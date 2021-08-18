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
            <path d='M9 17v-2h6v2H9zm9-6h-3v2h3v-2zm-6 2v-2h2v2h-2zm-1-2H9v2h2v-2zm-5 0h2v2H6v-2zm10 6h2v-2h-2v2zm-8 0H6v-2h2v2z' />
            <path
                fillRule='evenodd'
                d='M13 2V1h-2v1a1 1 0 01-1 1H9a3 3 0 00-3 3v1H3a1 1 0 00-1 1v12a1 1 0 001 1h18a1 1 0 001-1V8a1 1 0 00-1-1H8V6a1 1 0 011-1h1a3 3 0 003-3zM4 9v10h16V9H4z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Keyboard.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Keyboard.displayName = 'Keyboard';
export default Keyboard;
