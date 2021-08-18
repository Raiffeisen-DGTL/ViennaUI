import React, { SVGAttributes } from 'react';

export interface CandyProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Candy: React.FC<CandyProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M8.743 18.486L8 22.2l-1.71.49-5-5L1.8 16l3.06-.59a6 6 0 00.74 1.89l-1.6.31L6.39 20l.572-2.814A5.59 5.59 0 017.14 9.45L8.9 7.68a5.6 5.6 0 016.34-1.11l.76-3.8 1.71-.46 5 5L22.2 9l-3.03.56a6 6 0 00-.74-1.89L20 7.35 17.62 5l-.608 2.882a5.6 5.6 0 01-.192 7.718l-1.72 1.72A5.59 5.59 0 0111.14 19a5.581 5.581 0 01-2.397-.514zM12.86 8.1a3.58 3.58 0 00-2.54 1L8.6 10.82a3.592 3.592 0 105.08 5.08l1.72-1.72a3.59 3.59 0 00-2.54-6.13v.05z' />
        </svg>
    );
};

Candy.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Candy.displayName = 'Candy';
export default Candy;
