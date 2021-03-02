import React, { SVGAttributes } from 'react';

export interface AtmCardsProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const AtmCards: React.FC<AtmCardsProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M19 4H5v16H3V3a1 1 0 011-1h16a1 1 0 011 1v17h-2V4z' />
            <path
                fillRule='evenodd'
                d='M8 6a1 1 0 00-1 1v4a1 1 0 001 1h8a1 1 0 001-1V7a1 1 0 00-1-1H8zm1 4V8h6v2H9zm0 12a2 2 0 01-2-2v-6h10v6a2 2 0 01-2 2H9zm0-6v4h1v-4H9zm3 0v4h3v-4h-3z'
                clipRule='evenodd'
            />
        </svg>
    );
};

AtmCards.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

AtmCards.displayName = 'AtmCards';
export default AtmCards;
