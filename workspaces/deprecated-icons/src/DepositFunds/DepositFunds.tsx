import React, { SVGAttributes } from 'react';

export interface DepositFundsProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const DepositFunds: React.FC<DepositFundsProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M20 7c1.095 0 1.982.887 1.982 1.982v10.036A1.982 1.982 0 0120 21H3.982A1.983 1.983 0 012 19.018V8.982C2 7.888 2.888 7.001 3.982 7H10v2H4v10h16V9h-6V7h6zM9.131 12L11 13.868V4h2v9.868L14.869 12H16v1.131l-4 4.001-4-4.001V12h1.131z' />
        </svg>
    );
};

DepositFunds.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

DepositFunds.displayName = 'DepositFunds';
export default DepositFunds;
