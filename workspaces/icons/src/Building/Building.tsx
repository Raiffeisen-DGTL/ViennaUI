import React, { SVGAttributes } from 'react';

export interface BuildingProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Building: React.FC<BuildingProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M8 2h14v20h-5v-2h3V4H10v4H8V2zm0 18v-3h2v5H8v-2zm-3-7h8v2H5v-2zm9.15-6.85h1.7v1.7h-1.7v-1.7zm-3 0h1.7v1.7h-1.7v-1.7zm6 0h1.7v1.7h-1.7v-1.7zm0 3h1.7v1.7h-1.7v-1.7zm0 3h1.7v1.7h-1.7v-1.7zM2 22V9h14v13h-5v-2h3v-9H4v9h3v2H2z' />
        </svg>
    );
};

Building.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Building.displayName = 'Building';
export default Building;
