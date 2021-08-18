import React, { SVGAttributes } from 'react';

export interface CoffeeProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Coffee: React.FC<CoffeeProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M20 7H4.06l.86-3.53A1.93 1.93 0 016.79 2h10.43a1.91 1.91 0 011.86 1.46L20 7zM6.39 5h11.22l-.33-1H6.72l-.33 1zm10.54 3h2l-.83 12.15a2 2 0 01-2 1.85H7.94a2 2 0 01-2-1.85L5.07 8h2l.86 12h8.14l.86-12zM12 12.7a1.3 1.3 0 100 2.6 1.3 1.3 0 000-2.6zm0-1.7a3 3 0 110 6 3 3 0 010-6z' />
        </svg>
    );
};

Coffee.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Coffee.displayName = 'Coffee';
export default Coffee;
