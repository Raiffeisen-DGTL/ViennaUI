import React, { SVGAttributes } from 'react';

export interface CardToOtherBankProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CardToOtherBank: React.FC<CardToOtherBankProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M2 7a3 3 0 013-3h15v2H5a1 1 0 00-1 1v1h8v2H4v7a1 1 0 001 1h15v2H5a3 3 0 01-3-3V7z' />
            <path d='M23.707 11.293l-3.5-3.5-1.414 1.414L20.586 11H16v2h4.586l-1.793 1.793 1.414 1.414 3.5-3.5a1 1 0 000-1.414z' />
        </svg>
    );
};

CardToOtherBank.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CardToOtherBank.displayName = 'CardToOtherBank';
export default CardToOtherBank;
