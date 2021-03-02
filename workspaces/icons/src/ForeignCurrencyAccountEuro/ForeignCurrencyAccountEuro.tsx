import React, { SVGAttributes } from 'react';

export interface ForeignCurrencyAccountEuroProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ForeignCurrencyAccountEuro: React.FC<ForeignCurrencyAccountEuroProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M22 3v12a1 1 0 01-1 1h-6v-2h3.085A1.5 1.5 0 0120 12.085v-6.17A1.5 1.5 0 0118.085 4H5.915A1.5 1.5 0 014 5.915V13H2V3a1 1 0 011-1h18a1 1 0 011 1z' />
            <path d='M10.489 14.04A3 3 0 007.172 16H11l-1 2H7.172a3.001 3.001 0 005.426.5l1.732 1A5 5 0 015.101 18H3l1-2h1.101a5 5 0 018.434-2.536l-1.414 1.415a3 3 0 00-1.632-.839z' />
        </svg>
    );
};

ForeignCurrencyAccountEuro.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ForeignCurrencyAccountEuro.displayName = 'ForeignCurrencyAccountEuro';
export default ForeignCurrencyAccountEuro;
