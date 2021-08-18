import React, { SVGAttributes } from 'react';

export interface Prints2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Prints2: React.FC<Prints2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M17 3.517A9 9 0 003 11a1 1 0 102 0 7 7 0 0113.762-1.812 1 1 0 001.931-.517A9 9 0 0017 3.517z' />
            <path d='M13 11a1 1 0 10-2 0v.292a5 5 0 01-2.764 4.472l-2.683 1.342a1 1 0 10.894 1.788l2.684-1.341A7 7 0 0013 11.292V11zm7.164.514a1 1 0 01.822 1.15l-.24 1.445a12 12 0 01-4.956 7.858l-1.216.852a1 1 0 11-1.147-1.638l1.216-.852a10 10 0 004.13-6.548l.24-1.445a1 1 0 011.151-.822z' />
            <path d='M10.5 8.402A3 3 0 0114.598 9.5c.17.296.254.46.308.642.053.176.094.42.094.858 0 2.373-.797 4.627-2.441 6.161-.8.747-1.677 1.48-2.519 2.019-.874.56-1.57.82-2.04.82a1 1 0 100 2c1.065 0 2.168-.526 3.12-1.136.983-.631 1.96-1.453 2.803-2.24C16.06 16.63 17 13.795 17 11c0-.561-.052-1.014-.179-1.435-.126-.418-.31-.753-.49-1.065A5 5 0 007 11c0 .448-.08.895-.234 1.241-.152.341-.343.522-.546.603L3.13 14.07a1 1 0 00.74 1.858l3.089-1.227c.823-.326 1.337-.98 1.634-1.648C8.888 12.392 9 11.655 9 11a3 3 0 011.5-2.598z' />
        </svg>
    );
};

Prints2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Prints2.displayName = 'Prints2';
export default Prints2;
