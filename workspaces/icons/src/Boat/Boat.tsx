import React, { SVGAttributes } from 'react';

export interface BoatProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Boat: React.FC<BoatProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M15 16V1.72l-1.242.31c-1.129.282-3.28 1.294-4.86 3.33-1.627 2.094-2.584 5.19-1.359 9.444l1.922-.554c-1.055-3.66-.205-6.09 1.016-7.664A7.984 7.984 0 0113 4.478V16H4a2 2 0 002 2h14v-2h-5zm.106 4.08a2 2 0 001.789 0l1.316-.658a4 4 0 013.578 0l.658.33a1 1 0 11-.894 1.788l-.658-.329a2 2 0 00-1.79 0l-1.316.659a4 4 0 01-3.578 0l-1.316-.659a2 2 0 00-1.79 0l-1.316.659a4 4 0 01-3.578 0l-1.316-.659a2 2 0 00-1.79 0l-.658.33a1 1 0 11-.894-1.79l.658-.329a4 4 0 013.578 0l1.317.659a2 2 0 001.789 0l1.316-.659a4 4 0 013.578 0l1.317.659z' />
        </svg>
    );
};

Boat.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Boat.displayName = 'Boat';
export default Boat;
