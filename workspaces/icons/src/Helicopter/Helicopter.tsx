import React, { SVGAttributes } from 'react';

export interface HelicopterProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Helicopter: React.FC<HelicopterProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 6H5L4 5V4h18v1l-1 1h-7v2h-2V6zM9.625 17c-2.002 0-3.163-1.673-4.146-3.417C4.849 12.466 3.214 9.165 3.133 9H1L0 8V7h4l1.515 2h10.172A5.319 5.319 0 0121 14.313V15a2 2 0 01-2 2H9.625zm8.869-4.656A3.6 3.6 0 0015.687 11h-1.046v1.344h3.853zM12.988 11H6.141s.64 1.344 1.184 2.3a3.218 3.218 0 002.3 1.7h9.531v-1H14.9a1.912 1.912 0 01-1.912-1.912V11zm7.659 7.231l1.414 1.415A3.976 3.976 0 0119.083 21H6.042v-2h2.989v-1.031h1.906V19h4.125v-1.031h1.907V19h2.114a1.989 1.989 0 001.564-.769z' />
        </svg>
    );
};

Helicopter.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Helicopter.displayName = 'Helicopter';
export default Helicopter;
