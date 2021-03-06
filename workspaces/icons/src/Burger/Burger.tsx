import React, { SVGAttributes } from 'react';

export interface BurgerProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Burger: React.FC<BurgerProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M2 8a6 6 0 016-6h8a6 6 0 016 6v2H2V8zm6-4a4 4 0 00-4 4h16a4 4 0 00-4-4H8zM2 16h20v2a4 4 0 01-4 4H6a4 4 0 01-4-4v-2zm2 2a2 2 0 002 2h12a2 2 0 002-2H4z'
                clipRule='evenodd'
            />
            <path d='M11.106 13.565a2 2 0 011.788 0l1.317.659a4 4 0 003.578 0l1.101-.551a2 2 0 012.004.125l1.551 1.034 1.11-1.664-1.552-1.034a4 4 0 00-4.007-.25l-1.102.55a2 2 0 01-1.788 0l-1.317-.658a4 4 0 00-3.578 0l-1.317.659a2 2 0 01-1.788 0l-1.102-.55a4 4 0 00-4.007.249L.445 13.168l1.11 1.664 1.551-1.034a2 2 0 012.004-.125l1.101.55a4 4 0 003.578 0l1.317-.658z' />
        </svg>
    );
};

Burger.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Burger.displayName = 'Burger';
export default Burger;
