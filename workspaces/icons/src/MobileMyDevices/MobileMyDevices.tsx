import React, { SVGAttributes } from 'react';

export interface MobileMyDevicesProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const MobileMyDevices: React.FC<MobileMyDevicesProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M15 18a1 1 0 11-2 0 1 1 0 012 0z' />
            <path
                fillRule='evenodd'
                d='M7 7a2 2 0 012-2h10a2 2 0 012 2v14a2 2 0 01-2 2H9a2 2 0 01-2-2V7zm12 0H9v14h10V7z'
                clipRule='evenodd'
            />
            <path fillRule='evenodd' d='M3 3a2 2 0 012-2h12v2H5v16H3V3z' clipRule='evenodd' />
        </svg>
    );
};

MobileMyDevices.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

MobileMyDevices.displayName = 'MobileMyDevices';
export default MobileMyDevices;
