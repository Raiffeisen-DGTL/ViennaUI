import React, { SVGAttributes } from 'react';

export interface HomeAndAppliancesProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const HomeAndAppliances: React.FC<HomeAndAppliancesProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M18.988 2A2.011 2.011 0 0121 4.013v15.976A2.011 2.011 0 0118.988 22H5.012A2.011 2.011 0 013 19.989V4.013A2.011 2.011 0 015.012 2h13.976zM19 20V4H5v16h14zm-7-2a5 5 0 114.576-7H14.22a3 3 0 100 4h2.356A5 5 0 0112 18zm1-5.999h4v2h-4v-2zm-6-7h2v2H7v-2zm3 0h2v2h-2v-2z' />
        </svg>
    );
};

HomeAndAppliances.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

HomeAndAppliances.displayName = 'HomeAndAppliances';
export default HomeAndAppliances;
