import React, { SVGAttributes } from 'react';

export interface Clothes2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Clothes2: React.FC<Clothes2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M11 2.993a1 1 0 00-1.196-.974l-5 1A1 1 0 004 4v5a1 1 0 001 1h1v2H5a3 3 0 00-2.236 5A3 3 0 005 22h8a3 3 0 002.83-4H19a1 1 0 001-1v-7h1a1 1 0 001-1V4a1 1 0 00-.804-.98l-5-1A1 1 0 0015 2.992V3l-.003.058a2.688 2.688 0 01-.266.995 1.635 1.635 0 01-.551.646C13.94 4.86 13.575 5 13 5s-.94-.14-1.18-.3a1.635 1.635 0 01-.55-.647A2.688 2.688 0 0111 3v-.007zM15.83 16H18V9a1 1 0 011-1h1V4.82l-3.185-.637a4.34 4.34 0 01-.296.764 3.632 3.632 0 01-1.23 1.416C14.685 6.766 13.925 7 13 7s-1.685-.234-2.29-.637a3.632 3.632 0 01-1.23-1.416 4.473 4.473 0 01-.295-.764L6 4.82V8h1a1 1 0 011 1v3h5a3 3 0 012.83 4zM4 19a1 1 0 011-1h8a1 1 0 110 2H5a1 1 0 01-1-1zm1-5a1 1 0 100 2h8a1 1 0 100-2H5z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Clothes2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Clothes2.displayName = 'Clothes2';
export default Clothes2;
