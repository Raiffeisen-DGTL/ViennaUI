import React, { SVGAttributes } from 'react';

export interface CashTransactionsProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CashTransactions: React.FC<CashTransactionsProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M22 3a1 1 0 00-1-1H3a1 1 0 00-1 1v9h2V5.915A1.5 1.5 0 005.915 4h12.17A1.5 1.5 0 0020 5.915V12h2V3zM2.293 16.293l3.5-3.5 1.414 1.414L5.414 16H11v2H5.414l1.793 1.793-1.414 1.414-3.5-3.5a1 1 0 010-1.414zm14.5 3.5L18.586 18H13v-2h5.586l-1.793-1.793 1.414-1.414 3.5 3.5a1 1 0 010 1.414l-3.5 3.5-1.414-1.414z' />
        </svg>
    );
};

CashTransactions.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CashTransactions.displayName = 'CashTransactions';
export default CashTransactions;
