import React, { SVGAttributes } from 'react';

export interface StarPerson2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const StarPerson2: React.FC<StarPerson2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M4 7a5 5 0 1110 0A5 5 0 014 7zm5-3a3 3 0 100 6 3 3 0 000-6z'
                clipRule='evenodd'
            />
            <path d='M1 22c0-4.402 3.09-9 8.5-9 1.615 0 3.05.419 4.26 1.141l-1.024 1.718C11.839 15.323 10.759 15 9.5 15 5.473 15 3 18.402 3 22H1zm17.61-7.519a.4.4 0 00-.66 0l-1.258 1.835-2.132.628a.4.4 0 00-.204.628l1.356 1.762-.062 2.223a.4.4 0 00.534.388l2.095-.745 2.096.745a.4.4 0 00.534-.388l-.062-2.223 1.356-1.762a.4.4 0 00-.204-.628l-2.133-.628-1.256-1.835z' />
        </svg>
    );
};

StarPerson2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

StarPerson2.displayName = 'StarPerson2';
export default StarPerson2;
