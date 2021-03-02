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
            <path d='M18 16h5v2h-5v-2zm-2-9h4v2h-4V7zm-9.014 5.25L5.256 14H9v2H5.272l1.726 1.725L7 19H5.727L1.73 15.003 5.692 11h1.266l.026.026.002 1.224zM12 11h1.273l3.997 3.997L13.309 19h-1.267l-.026-.025-.002-1.225 1.73-1.75H10v-2h3.728l-1.725-1.724L12 11zm8.959-7A2.041 2.041 0 0123 6.042v6.917A2.041 2.041 0 0120.959 15H18v-2h3V6H5v3.6l-2 2V6.042C3 4.914 3.914 4 5.042 4h15.917z' />
        </svg>
    );
};

CashTransactions.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CashTransactions.displayName = 'CashTransactions';
export default CashTransactions;
