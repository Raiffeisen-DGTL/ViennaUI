import React, { SVGAttributes } from 'react';

export interface AutoPartsProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const AutoParts: React.FC<AutoPartsProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M22 12a10 10 0 10-12 9.8v-2.064a7.986 7.986 0 01-5.36-10.87l3.62 2.091A3.816 3.816 0 0011 15.752V22h1.188l.008-.01C17.64 21.886 22 17.444 22 12zM12 3.997a7.98 7.98 0 016.363 3.173l-3.6 2.079a3.891 3.891 0 00-5.5-.023L5.657 7.145A7.983 7.983 0 0112 3.998zM10 12a2 2 0 114 0 2 2 0 01-4 0zm3 7.932v-4.179A3.9 3.9 0 0015.9 12a3.85 3.85 0 00-.15-1.01l3.624-2.09A7.996 7.996 0 0113 19.929v.002z' />
        </svg>
    );
};

AutoParts.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

AutoParts.displayName = 'AutoParts';
export default AutoParts;
