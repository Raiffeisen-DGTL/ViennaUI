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
            <path d='M7 3v2H1V3h6zm16 0v2h-6V3h6z' />
            <path
                fillRule='evenodd'
                d='M5 9V7H3v4a1 1 0 00.293.707L6 14.414v1.172l-3.207 3.207 1.414 1.414L7.414 17h9.172l3.207 3.207 1.414-1.414L18 15.586v-1.172l2.707-2.707A1 1 0 0021 11V7h-2v2H5zm.414 2l2.293 2.293A1 1 0 018 14v1h8v-1a1 1 0 01.293-.707L18.586 11H5.414z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Drone.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Drone.displayName = 'Drone';
export default Drone;
