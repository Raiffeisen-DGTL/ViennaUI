import React, { SVGAttributes } from 'react';

export interface Restaurant2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Restaurant2: React.FC<Restaurant2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M16.707 2.293A1 1 0 0015 3v19h2v-6.382l2.342-1.17A3 3 0 0021 11.763v-.622a11 11 0 00-3.222-7.778l-1.07-1.071zm1.74 10.365L17 13.382V5.485a9 9 0 012 5.657v.622a1 1 0 01-.553.894z'
                clipRule='evenodd'
            />
            <path d='M5 2v6a1 1 0 001 1h4a1 1 0 001-1V2h2v6a3 3 0 01-3 3H9v11H7V11H6a3 3 0 01-3-3V2h2z' />
            <path d='M7 7V2h2v5H7z' />
        </svg>
    );
};

Restaurant2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Restaurant2.displayName = 'Restaurant2';
export default Restaurant2;
