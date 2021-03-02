import React, { SVGAttributes } from 'react';

export interface CruisesProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Cruises: React.FC<CruisesProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M4 13v1.792l-2 .812V11h15l-1.5-2H5v1H3V7h3V4h2v3h1V4h2v3h5.5l3 4h2.888l-1.346 4.083-1.896-.633.466-1.45H4zm14.667 3a3.8 3.8 0 012.193.646A1.8 1.8 0 0022 17v2a3.764 3.764 0 01-2.179-.643 2.061 2.061 0 00-2.316 0 3.747 3.747 0 01-2.172.643 3.86 3.86 0 01-2.22-.651A1.773 1.773 0 0012 18a1.792 1.792 0 00-1.133.352 3.821 3.821 0 01-2.2.648 3.758 3.758 0 01-2.166-.641A1.851 1.851 0 005.333 18c-.414-.01-.82.116-1.156.359A3.844 3.844 0 012 19v-2c.414.01.82-.116 1.156-.359A3.844 3.844 0 015.333 16a3.825 3.825 0 012.205.648A1.79 1.79 0 008.667 17c.419.015.83-.112 1.167-.361a3.954 3.954 0 014.315 0c.343.25.76.377 1.184.361.407.015.807-.11 1.134-.352a3.8 3.8 0 012.2-.648z' />
        </svg>
    );
};

Cruises.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Cruises.displayName = 'Cruises';
export default Cruises;
