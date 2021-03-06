import React, { SVGAttributes } from 'react';

export interface WomenProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Women: React.FC<WomenProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M11.929 1a8 8 0 018 8v13h-3a3 3 0 01-3-3v-5.535a4 4 0 01-6-3.465V8h2v2a2 2 0 002 2c1.104 0 2-1 2-2.417a3.32 3.32 0 00-.244-.088C12.863 9.219 10.93 8.57 10.93 5c0-.063 2 0 2 0 0 3 2.606 3 3 3v11a1 1 0 001 1h1V9a6 6 0 10-12 0v6h-2V9a8 8 0 018-8z' />
            <path d='M11.928 16h-.67c-1.249 0-2.267 0-3.095.09-.888.096-1.66.31-2.358.789-.68.467-1.143 1.09-1.551 1.858-.392.735-.77 1.68-1.233 2.84L3 21.63l1.857.742c.49-1.223.828-2.067 1.162-2.695.323-.607.6-.93.919-1.149.428-.29.934-.394 1.441-.449.708-.077 1.617-.078 2.935-.078h.614v-2z' />
        </svg>
    );
};

Women.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Women.displayName = 'Women';
export default Women;
