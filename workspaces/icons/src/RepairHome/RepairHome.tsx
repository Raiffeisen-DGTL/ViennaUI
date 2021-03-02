import React, { SVGAttributes } from 'react';

export interface RepairHomeProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const RepairHome: React.FC<RepairHomeProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M3 2a1 1 0 00-1 1v6a1 1 0 001 1v6a1 1 0 00-1 1v4a1 1 0 001 1h9a1 1 0 001-1v-4a1 1 0 00-1-1h-1.382l-.83-1.658A3.003 3.003 0 019.645 14H11a4 4 0 004-4h2a4.002 4.002 0 003.874-3H24V5h-3.126A4.002 4.002 0 0017 2H3zm10 2v4H4V4h9zm4 4h-2V4h2a2 2 0 110 4zm-4 2h-2.382l-.83 1.658a3.003 3.003 0 00-.144.342H11a2 2 0 002-2zm-4.618 0H5v6h3.382L8 15.236a5 5 0 010-4.472L8.382 10zM4 20v-2h7v2H4z'
                clipRule='evenodd'
            />
        </svg>
    );
};

RepairHome.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

RepairHome.displayName = 'RepairHome';
export default RepairHome;
