import React, { SVGAttributes } from 'react';

export interface ForeignCurrencyAccountDollarProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ForeignCurrencyAccountDollar: React.FC<ForeignCurrencyAccountDollarProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M22 3v12a1 1 0 01-1 1h-7v-2h4.085A1.5 1.5 0 0120 12.085v-6.17A1.5 1.5 0 0118.085 4H5.915A1.5 1.5 0 014 5.915V12H2V3a1 1 0 011-1h18a1 1 0 011 1z' />
            <path d='M7 12a3 3 0 100 6h2a1 1 0 110 2H7a1 1 0 01-1-1H4a3 3 0 003 3v1h2v-1a3 3 0 100-6H7a1 1 0 110-2h2a1 1 0 011 1h2a3 3 0 00-3-3v-1H7v1z' />
        </svg>
    );
};

ForeignCurrencyAccountDollar.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ForeignCurrencyAccountDollar.displayName = 'ForeignCurrencyAccountDollar';
export default ForeignCurrencyAccountDollar;
