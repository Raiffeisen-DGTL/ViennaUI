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
            <path d='M11 7.014h2v2h-2v-2zm-4 5.968H5v2h2v-2zm9.917.032h2v2h-2v-2zm.021-2.638L15.515 8.97l-4.951 4.945 1.415 1.414 4.959-4.954z' />
            <path
                fillRule='evenodd'
                d='M2.84 9.987a10 10 0 0118.32 0h.005a9.977 9.977 0 01.828 4.415 9.98 9.98 0 01-.829 3.6h-.003a9.983 9.983 0 01-.556 1.085H23v2h-3.953l-.004.003h-3.345l.007-.003H8.297a.193.193 0 00.006.003H4.958l-.003-.003H1v-2h2.396a9.987 9.987 0 01-.555-1.084h-.005a9.976 9.976 0 01-.828-4.414 9.98 9.98 0 01.829-3.602h.003zM4.962 17.8a8.087 8.087 0 00.867 1.287h12.343a7.93 7.93 0 00.753-1.084h-.001a8.009 8.009 0 000-8.015 8 8 0 00-13.85 0h.003a8.016 8.016 0 00-1.049 3.334 8.02 8.02 0 00.934 4.478z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Speedometer.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Speedometer.displayName = 'Speedometer';
export default Speedometer;
