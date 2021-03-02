import React, { SVGAttributes } from 'react';

export interface DepositProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Deposit: React.FC<DepositProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M20.016 2c1.096 0 1.983.888 1.984 1.984v15.032A1.985 1.985 0 0120.016 21H19v1h-3v-1h-6v1H7v-1H5.984A1.985 1.985 0 014 19.016V18h2v1.016L20.016 19 20 4H5.985v1H7v2H2V5h2V3.984C4 2.888 4.888 2.001 5.984 2h14.032zM7 15v2H2v-2h2V8h1.988l.008 7H7zm11.9-3.5a3.4 3.4 0 11-6.8 0 3.4 3.4 0 016.8 0zm-5 0a1.6 1.6 0 103.2 0 1.6 1.6 0 00-3.2 0z' />
        </svg>
    );
};

Deposit.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Deposit.displayName = 'Deposit';
export default Deposit;
