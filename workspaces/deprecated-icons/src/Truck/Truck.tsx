import React, { SVGAttributes } from 'react';

export interface TruckProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Truck: React.FC<TruckProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M4 11h10v2H4v-2zm14-3a4 4 0 014 4v3a2 2 0 01-2 2h-1a2 2 0 11-4 0H8a2 2 0 11-4 0h-.06A1.94 1.94 0 012 15.06V5.94A1.94 1.94 0 013.9 4h10A2.1 2.1 0 0116 6.1V13h-2V6.1a.11.11 0 00-.1-.1H4v9h16v-3a2 2 0 00-2-2h-1V8h1z' />
        </svg>
    );
};

Truck.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Truck.displayName = 'Truck';
export default Truck;
