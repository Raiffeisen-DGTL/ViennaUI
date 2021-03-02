import React, { SVGAttributes } from 'react';

export interface CardAddNewProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CardAddNew: React.FC<CardAddNewProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M5 3a3 3 0 00-3 3v6h2V9h16v7a1 1 0 01-1 1h-7v2h7a3 3 0 003-3V6a3 3 0 00-3-3H5zm15 4H4V6a1 1 0 011-1h14a1 1 0 011 1v1z'
                clipRule='evenodd'
            />
            <path d='M5 13v3H2v2h3v3h2v-3h3v-2H7v-3H5z' />
        </svg>
    );
};

CardAddNew.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CardAddNew.displayName = 'CardAddNew';
export default CardAddNew;
