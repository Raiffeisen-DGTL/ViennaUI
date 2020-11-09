import React, { SVGAttributes } from 'react';

export interface CashWithdrawalProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CashWithdrawal: React.FC<CashWithdrawalProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M9 14h2v4H9v-4zM3 2h18v2H3V2zm14 17V5h2v14.022A1.979 1.979 0 0117.022 21H6.979A1.979 1.979 0 015 19.022V5h2v14h10z' />
        </svg>
    );
};

CashWithdrawal.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CashWithdrawal.displayName = 'CashWithdrawal';
export default CashWithdrawal;
