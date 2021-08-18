import React, { SVGAttributes } from 'react';

export interface CardMasterProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CardMaster: React.FC<CardMasterProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M13.148 10.228a3 3 0 10.352 5.37 2.992 2.992 0 002.277.3 3 3 0 10-2.277-5.496 2.992 2.992 0 00-.352-.174zm-1.407 1.806a1 1 0 011.009.305 1 1 0 001.5 0 1 1 0 110 1.322 1 1 0 00-1.5 0 1 1 0 11-1.009-1.627z'
                clipRule='evenodd'
            />
            <path
                fillRule='evenodd'
                d='M5 4a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3H5zM4 7a1 1 0 011-1h14a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1V7z'
                clipRule='evenodd'
            />
        </svg>
    );
};

CardMaster.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CardMaster.displayName = 'CardMaster';
export default CardMaster;
