import React, { SVGAttributes } from 'react';

export interface Coordinates1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Coordinates1: React.FC<Coordinates1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M18.065 11h-1.273v1.273L18.519 14H10V5.546l1.727 1.727H13V6L9 2 5 6v1.273h1.273L8 5.546v9.033l-5.106 5.113V17.25l-.9-.901-.9.901v5.656h5.657l.9-.9-.9-.9H4.308L9.407 16h9.112l-1.727 1.727V19h1.273l4-4z' />
        </svg>
    );
};

Coordinates1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Coordinates1.displayName = 'Coordinates1';
export default Coordinates1;
