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
            <path
                fillRule='evenodd'
                d='M16.194 2.684a1 1 0 011.655-.391l4.243 4.243A1 1 0 0121.7 8.19l-3.318 1.106a5 5 0 01-1.24 5.017l-2.83 2.828a5 5 0 01-5.016 1.241L8.19 21.7a1 1 0 01-1.655.39l-4.242-4.24a1 1 0 01.39-1.655l3.319-1.106a5 5 0 011.24-5.017l2.83-2.828A5 5 0 0115.087 6l1.106-3.317zm.963 4.574a7.386 7.386 0 00-.03-.03l-.255-.255.707-2.122 1.955 1.955-2.122.707-.255-.255zm-1.441 1.387a3 3 0 00-4.23.012l-2.83 2.828a3 3 0 004.243 4.243l2.829-2.829a3 3 0 00.012-4.23l-.024-.024zM4.851 17.579l1.955 1.955.707-2.122-.54-.54-2.122.707z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Candy.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Candy.displayName = 'Candy';
export default Candy;
