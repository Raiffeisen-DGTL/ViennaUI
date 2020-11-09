import React, { SVGAttributes } from 'react';

export interface Umbrella2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Umbrella2: React.FC<Umbrella2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M14 3V2h-2v1L9 17h3v2.5a1.5 1.5 0 01-3 0v-.583H7v.583a3.5 3.5 0 007 0V17h3L14 3zm-2.773 12.2L13 6.924l1.773 8.276h-3.546z' />
        </svg>
    );
};

Umbrella2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Umbrella2.displayName = 'Umbrella2';
export default Umbrella2;
