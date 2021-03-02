import React, { SVGAttributes } from 'react';

export interface CardFromOtherBankProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CardFromOtherBank: React.FC<CardFromOtherBankProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M22 17a3 3 0 01-3 3H4v-2h15a1 1 0 001-1v-7h-8V8h8V7a1 1 0 00-1-1H4V4h15a3 3 0 013 3v10z' />
            <path d='M4.207 16.207l3.5-3.5a1 1 0 000-1.414l-3.5-3.5-1.414 1.414L4.586 11H0v2h4.586l-1.793 1.793 1.414 1.414z' />
        </svg>
    );
};

CardFromOtherBank.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CardFromOtherBank.displayName = 'CardFromOtherBank';
export default CardFromOtherBank;
