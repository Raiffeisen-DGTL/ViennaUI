import React, { SVGAttributes } from 'react';

export interface Grocery2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Grocery2: React.FC<Grocery2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M8 8v4h2V8H8zm4 4V8h2v4h-2zm4-4v4h2V8h-2z' />
            <path
                fillRule='evenodd'
                d='M0 2h2.382a2 2 0 011.789 1.106L4.618 4H20.78a2 2 0 011.961 2.392l-1.439 7.196A3 3 0 0118.361 16H6a1 1 0 100 2h15v2h-1.085a1.5 1.5 0 11-2.83 0h-9.17a1.5 1.5 0 11-2.778-.126 3.001 3.001 0 01-.31-5.636l-1.781-8.91L2.382 4H0V2zm5.22 4l1.6 8h11.54a1 1 0 00.981-.804L20.781 6H5.22z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Grocery2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Grocery2.displayName = 'Grocery2';
export default Grocery2;
