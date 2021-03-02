import React, { SVGAttributes } from 'react';

export interface MonitorProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Monitor: React.FC<MonitorProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M13.5 13a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0z' />
            <path
                fillRule='evenodd'
                d='M2 15a3 3 0 003 3h6v2H8v2h8v-2h-3v-2h6a3 3 0 003-3V5a3 3 0 00-3-3H5a3 3 0 00-3 3v10zm3 1a1 1 0 01-1-1V5a1 1 0 011-1h14a1 1 0 011 1v10a1 1 0 01-1 1H5z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Monitor.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Monitor.displayName = 'Monitor';
export default Monitor;
