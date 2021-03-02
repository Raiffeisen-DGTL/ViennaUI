import React, { SVGAttributes } from 'react';

export interface Grocery1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Grocery1: React.FC<Grocery1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M2.382 2H0v2h2.382l.685 1.37 2.595 8.649a3 3 0 00-.525 5.855A1.5 1.5 0 107.915 20h9.17a1.5 1.5 0 102.83 0H21v-2H6a1 1 0 110-2h12.36a3 3 0 002.942-2.412l1.44-7.196A2 2 0 0020.78 4H4.618l-.447-.894A2 2 0 002.382 2zm5.362 12l-2.4-8H20.78l-1.439 7.196a1 1 0 01-.98.804H7.743z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Grocery1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Grocery1.displayName = 'Grocery1';
export default Grocery1;
