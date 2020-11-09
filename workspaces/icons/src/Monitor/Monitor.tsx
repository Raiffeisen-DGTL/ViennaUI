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
            <path d='M20.018 2c1.094 0 1.981.888 1.982 1.982v10.036c0 1.094-.886 1.98-1.98 1.982H4a1.982 1.982 0 01-1.984-1.982V3.982A1.982 1.982 0 014 2h16.018zm0 12l-.002-10H4v7h15v2H4v1h16.018zM13 19h3l1 1v1H7v-1l1-1h3v-2h2v2z' />
        </svg>
    );
};

Monitor.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Monitor.displayName = 'Monitor';
export default Monitor;
