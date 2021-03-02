import React, { SVGAttributes } from 'react';

export interface SpeedometerProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Speedometer: React.FC<SpeedometerProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M2 18.997h20l1 1v1H1v-1l1-1zm3-6.105h2v2H5v-2zm11.917.032h2v2h-2v-2zm-5.917-6h2v2h-2v-2zM5.076 17.913h-2.24a10 10 0 1118.328 0h-2.24a8 8 0 10-13.848 0zM16.938 8.88v1.405l-4.959 4.954-1.415-1.414 4.951-4.945h1.423z' />
        </svg>
    );
};

Speedometer.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Speedometer.displayName = 'Speedometer';
export default Speedometer;
