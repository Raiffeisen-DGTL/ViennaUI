import React, { SVGAttributes } from 'react';

export interface CashboxProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Cashbox: React.FC<CashboxProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M10 13.5a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2z' />
            <path
                fillRule='evenodd'
                d='M13 1a1 1 0 00-1 1v4a1 1 0 001 1h3v2H5a1 1 0 00-1 1v6H3a1 1 0 00-1 1v4a1 1 0 001 1h18a1 1 0 001-1v-4a1 1 0 00-1-1h-1v-6a1 1 0 00-1-1h-1V7h3a1 1 0 001-1V2a1 1 0 00-1-1h-8zm1 4V3h6v2h-6zM4 18h16v2H4v-2zm2-7h12v5H6v-5z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Cashbox.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Cashbox.displayName = 'Cashbox';
export default Cashbox;
