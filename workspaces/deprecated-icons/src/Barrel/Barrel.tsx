import React, { SVGAttributes } from 'react';

export interface BarrelProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Barrel: React.FC<BarrelProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M4 17l-1-1v-1h9.439a9 9 0 00-.632 2H6v3h6.057a5.29 5.29 0 001.354 2h-7.44A1.97 1.97 0 014 20.029V17zm2-7v4H4v-4L3 9V8h16v1l-1 1H6zm11.651 11.958l-.659-2.276-.692 2.264-.856-.372A3.9 3.9 0 0113.1 18c0-2.811 2.931-5.806 3.265-6.139l.635-.627.635.623c.334.33 3.269 3.294 3.269 6.143a3.894 3.894 0 01-2.382 3.593l-.871.365zm-.612-4.895l1.326 2.561c.441-.43.703-1.01.735-1.624 0-1.4-1.207-3.126-2.1-4.169-.891 1.055-2.1 2.8-2.1 4.169.035.602.274 1.175.676 1.624l1.463-2.561zM6 7H4V3.971A1.97 1.97 0 015.971 2h10.05C17.114 2 18 2.886 18 3.979V7h-2V4H6v3z' />
        </svg>
    );
};

Barrel.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Barrel.displayName = 'Barrel';
export default Barrel;
