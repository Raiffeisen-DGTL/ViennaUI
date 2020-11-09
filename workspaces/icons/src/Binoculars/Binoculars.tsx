import React, { SVGAttributes } from 'react';

export interface BinocularsProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Binoculars: React.FC<BinocularsProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M13.007 19.031l.006-2.19.406-4.841h-2.871l.45 5.005v2.026h-2v-1.943L8.187 10h7.594L15 17.088v1.943h-1.992zm-8.008 0h-1.99l.007-2.21L4.36 6.439A1.652 1.652 0 015.999 5V2h5v3h2V2h5v3c.764 0 1.412.564 1.517 1.321L20.999 17v2.031h-2V17.09L17.769 7H16V4h-1v3H9V4H8v3H6.218l-1.22 10.09v1.941zm8 2.958l.005-2.03 7.997.02-.005 2.031L13 21.99zm-10-.002l.006-2.03 7.997.025-.006 2.03-7.997-.025z' />
        </svg>
    );
};

Binoculars.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Binoculars.displayName = 'Binoculars';
export default Binoculars;
