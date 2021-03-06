import React, { SVGAttributes } from 'react';

export interface HouseWapProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const HouseWap: React.FC<HouseWapProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M15.375 2.22a1 1 0 011.25 0l5 4A1 1 0 0122 7v1h-1v5a1 1 0 01-1 1h-4v-2h3V8h1v-.52l-4-3.2-4 3.2V8h-2V7a1 1 0 01.375-.78l5-4z' />
            <path
                fillRule='evenodd'
                d='M3 15H2v-1a1 1 0 01.375-.78l5-4a1 1 0 011.25 0l5 4A1 1 0 0114 14v1h-1v5a1 1 0 01-1 1H4a1 1 0 01-1-1v-5zm2 0v4h6v-4h1v-.52l-4-3.2-4 3.2V15h1z'
                clipRule='evenodd'
            />
            <path d='M9.93 4.273a8 8 0 00-5.657 5.656L2.34 9.412A10 10 0 019.41 2.34l.519 1.932zm9.29 11.171a8 8 0 01-4.55 4.097l.668 1.885a10 10 0 005.688-5.12l-1.805-.862z' />
        </svg>
    );
};

HouseWap.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

HouseWap.displayName = 'HouseWap';
export default HouseWap;
