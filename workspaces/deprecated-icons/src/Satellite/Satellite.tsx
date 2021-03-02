import React, { SVGAttributes } from 'react';

export interface SatelliteProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Satellite: React.FC<SatelliteProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M23 8a6 6 0 00-10.659-3.777l-9.7 5.388.971 1.748 7.445-4.135A6.018 6.018 0 0011 8a5.96 5.96 0 001.115 3.471l-9.154 9.154 1.414 1.414L17.039 9.375l-1.414-1.414-2.207 2.207A4.117 4.117 0 0112.8 8a4.2 4.2 0 114.2 4.2 4.249 4.249 0 01-.6-.06l-1.482 1.481c.91.347 1.893.459 2.858.323l-4.136 7.445 1.749.97 5.389-9.7A5.987 5.987 0 0023 8z' />
        </svg>
    );
};

Satellite.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Satellite.displayName = 'Satellite';
export default Satellite;
