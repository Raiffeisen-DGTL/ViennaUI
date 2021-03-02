import React, { SVGAttributes } from 'react';

export interface BasketballProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Basketball: React.FC<BasketballProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 2.062a7.954 7.954 0 00-3.5 1.323A10 10 0 019.95 11H11V4.062zM11 13H9.95a10 10 0 01-2.45 5.615 7.954 7.954 0 003.5 1.323V13zm2 6.938V13h1.05a10 10 0 002.45 5.615 7.954 7.954 0 01-3.5 1.323zM13 11V4.062a7.954 7.954 0 013.5 1.323A10 10 0 0014.05 11H13zM7.391 8.939A8 8 0 017.937 11H4.062A7.969 7.969 0 016 6.708a8 8 0 011.391 2.23zM7.937 13H4.062A7.969 7.969 0 006 17.292 8 8 0 007.937 13zm12.001 0h-3.875A7.999 7.999 0 0018 17.292 7.969 7.969 0 0019.938 13zm-3.875-2h3.875A7.969 7.969 0 0018 6.708 8 8 0 0016.063 11z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Basketball.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Basketball.displayName = 'Basketball';
export default Basketball;
