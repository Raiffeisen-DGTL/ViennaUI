import React, { SVGAttributes } from 'react';

export interface SatelliteDishProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const SatelliteDish: React.FC<SatelliteDishProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M10.767 11.819l2.527-2.527 1.414 1.415-2.524 2.523 6.35 6.322A9.986 9.986 0 014.42 5.5l6.347 6.319zM12.03 2c5.508.024 9.962 4.492 9.969 10h-2a8.009 8.009 0 00-7.969-8V2zM12 6a6.006 6.006 0 016 6h-2a4 4 0 00-4-4h-.031V6H12zm-8 6a7.986 7.986 0 0011.561 7.155L4.845 8.438A7.942 7.942 0 004 12z' />
        </svg>
    );
};

SatelliteDish.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

SatelliteDish.displayName = 'SatelliteDish';
export default SatelliteDish;
