import React, { SVGAttributes } from 'react';

export interface DroneProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Drone: React.FC<DroneProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M8 6.168l-1 1H1l-1-1v-1h3v-1h2v1h3v1zm13-1h3v1l-1 1h-6l-1-1v-1h3v-1h2v1zm-10 7h2v2h-2v-2zm8-3v-1h2v3.414l-3 3v1.172l2.95 2.946-1.414 1.414-2.95-2.949H7.414l-2.95 2.949L3.05 18.7l3-3v-1.118l-3-3v-1.414H3v-2h2v1h14zm-3 4.586l2.586-2.586H5.464l2.586 2.586v1.414H16v-1.414z' />
        </svg>
    );
};

Drone.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Drone.displayName = 'Drone';
export default Drone;
