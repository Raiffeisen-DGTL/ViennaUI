import React, { SVGAttributes } from 'react';

export interface MotorTransportProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const MotorTransport: React.FC<MotorTransportProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M10 17H7l-1-1v-1h3l1 1v1zm8-1l-1 1h-3v-1l1-1h3v1zm1-14a2 2 0 012 2v16a2 2 0 01-2 2h-2a1.992 1.992 0 01-1.723-1H8.723A1.992 1.992 0 017 22H5a2 2 0 01-2-2V4a2 2 0 012-2h14zm0 18v-7H5v7h2v-1h10v1h2zm0-9V4H5v7h14zM8 5h8v2H8V5z' />
        </svg>
    );
};

MotorTransport.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

MotorTransport.displayName = 'MotorTransport';
export default MotorTransport;
