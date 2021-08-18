import React, { SVGAttributes } from 'react';

export interface Insurance1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Insurance1: React.FC<Insurance1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M18 3a1 1 0 00-1-1H3a1 1 0 00-1 1v18a1 1 0 001 1h7v-2H4V4h12v5h2V3z'
                clipRule='evenodd'
            />
            <path
                fillRule='evenodd'
                d='M18.125 11.22a1 1 0 00-1.25-.001l-.002.002-.016.013-.072.055c-.064.048-.16.12-.284.207-.246.174-.594.405-.997.636-.849.485-1.78.868-2.504.868a1 1 0 00-1 1v3.5c0 2.224 1.435 3.735 2.665 4.623a10.477 10.477 0 002.495 1.318l.015.005.005.002h.002s.002 0 .318-.948l-.316.949a1 1 0 00.632 0L17.5 22.5l.316.949h.002l.002-.002.005-.001.015-.005a4.832 4.832 0 00.216-.08 10.477 10.477 0 002.28-1.238C21.566 21.235 23 19.724 23 17.5V14a1 1 0 00-1-1c-.724 0-1.655-.383-2.504-.868a12.598 12.598 0 01-1.353-.898l-.016-.013-.002-.002zM17.5 21.427a8.482 8.482 0 001.665-.927c1.019-.734 1.835-1.723 1.835-3v-2.613c-.936-.202-1.83-.638-2.496-1.019a14.457 14.457 0 01-1.004-.63c-.268.184-.612.406-1.004.63-.666.38-1.56.817-2.496 1.019V17.5c0 1.276.815 2.265 1.835 3.002a8.482 8.482 0 001.665.926zm.318.124zm-.636 0z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Insurance1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Insurance1.displayName = 'Insurance1';
export default Insurance1;
