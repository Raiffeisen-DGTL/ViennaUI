import React, { SVGAttributes } from 'react';

export interface Backpack2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Backpack2: React.FC<Backpack2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M6 9h2v10H6V9zm10 0h2v10h-2V9zm4.472-2c.897.12 1.558.9 1.528 1.805v10.453A1.766 1.766 0 0120.043 21H3.559C2.7 21 2 20.548 2 19.687V8.805A1.788 1.788 0 013.559 7h16.913zM20 19V9H4v10h16zM10 6.038H8v-1.99c0-1.11.9-2.01 2.01-2.01h3.98c1.11 0 2.01.9 2.01 2.01v1.99h-2v-2h-4v2z' />
        </svg>
    );
};

Backpack2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Backpack2.displayName = 'Backpack2';
export default Backpack2;
