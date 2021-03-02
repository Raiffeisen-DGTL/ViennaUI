import React, { SVGAttributes } from 'react';

export interface WateringCanProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const WateringCan: React.FC<WateringCanProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M19.707 5.652L19 6.359v1.414l.406.407L17 10.586V8.979A1.979 1.979 0 0015.021 7h-8.05A1.97 1.97 0 005 8.971v2.678A3.493 3.493 0 118.942 6H11.4A5.5 5.5 0 105 13.788v5.241A1.97 1.97 0 006.971 21h8.071A1.958 1.958 0 0017 19.042v-5.628l3.82-3.82.407.406h1.414l.707-.707-3.641-3.641zM15 13v6H7V9h8v4z' />
        </svg>
    );
};

WateringCan.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

WateringCan.displayName = 'WateringCan';
export default WateringCan;
