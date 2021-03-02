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
            <path
                fillRule='evenodd'
                d='M5.84 3.515A2 2 0 017.78 2h8.44a2 2 0 011.94 1.515L18.78 6H20v2H4V6h1.22l.62-2.485zM7.28 6h9.44l-.5-2H7.78l-.5 2zM6.004 21.09l-1-11 1.992-.18L7.913 20h8.174l.917-10.09 1.992.18-1 11A1 1 0 0117 22H7a1 1 0 01-.996-.91z'
                clipRule='evenodd'
            />
            <path
                fillRule='evenodd'
                d='M12 13a1 1 0 100 2 1 1 0 000-2zm-3 1a3 3 0 116 0 3 3 0 01-6 0z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Coffee.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Coffee.displayName = 'Coffee';
export default Coffee;
