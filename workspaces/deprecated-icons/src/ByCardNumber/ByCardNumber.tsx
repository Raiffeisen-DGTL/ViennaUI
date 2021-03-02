import React, { SVGAttributes } from 'react';

export interface ByCardNumberProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ByCardNumber: React.FC<ByCardNumberProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M19.991 2A2.008 2.008 0 0122 4.012v10c0 1.098-.89 1.987-1.988 1.988H17v-2h3V8H4v3H2V4.009A2.008 2.008 0 014.009 2h15.982zM4 6h16V4H4v2zm4 12v-6h2v9H8l-4-6v6H2v-9h2l4 6zm3 1h5v2h-5v-2zm3-7a2 2 0 012 2v2a2 2 0 01-2 2h-1a2 2 0 01-2-2v-2a2 2 0 012-2h1zm.2 4v-2a.2.2 0 00-.2-.2h-1a.2.2 0 00-.2.2v2c0 .11.09.2.2.2h1a.2.2 0 00.2-.2z' />
        </svg>
    );
};

ByCardNumber.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ByCardNumber.displayName = 'ByCardNumber';
export default ByCardNumber;
