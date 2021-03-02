import React, { SVGAttributes } from 'react';

export interface CardChangePinProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CardChangePin: React.FC<CardChangePinProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M19 3a3 3 0 013 3v9h-2V9H4v7a1 1 0 001 1h4v2H5a3 3 0 01-3-3V6a3 3 0 013-3h14zM4 7h16V6a1 1 0 00-1-1H5a1 1 0 00-1 1v1z'
                clipRule='evenodd'
            />
            <path
                fillRule='evenodd'
                d='M14 15a3 3 0 102.83 4H20v2h2v-3a1 1 0 00-1-1h-4.17A3.001 3.001 0 0014 15zm-1 3a1 1 0 112 0 1 1 0 01-2 0z'
                clipRule='evenodd'
            />
        </svg>
    );
};

CardChangePin.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CardChangePin.displayName = 'CardChangePin';
export default CardChangePin;
