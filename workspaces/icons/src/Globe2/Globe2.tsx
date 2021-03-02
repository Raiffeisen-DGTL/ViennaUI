import React, { SVGAttributes } from 'react';

export interface Globe2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Globe2: React.FC<Globe2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M17.364 2.636A9 9 0 114.636 15.364l-1.414 1.414A11 11 0 0011 20v1H8v2h8v-2h-3v-1.183a11 11 0 005.778-18.595l-1.414 1.414z' />
            <path
                fillRule='evenodd'
                d='M11 2a7 7 0 100 14 7 7 0 000-14zM9.086 4.38a5 5 0 113.827 9.24 5 5 0 01-3.827-9.24z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Globe2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Globe2.displayName = 'Globe2';
export default Globe2;
