import React, { SVGAttributes } from 'react';

export interface CashTransferProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CashTransfer: React.FC<CashTransferProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M2 4a1 1 0 011-1h18a1 1 0 011 1v4a1 1 0 011 1v4a1 1 0 01-1 1v4a1 1 0 01-1 1h-1v-5h-2a1 1 0 01-1-1V9a1 1 0 011-1h2V5H4v8H2V4zm17 8v-2h2v2h-2z'
                clipRule='evenodd'
            />
            <path d='M3.414 18H8v2H3.414l1.793 1.793-1.414 1.414-3.5-3.5a1 1 0 010-1.414l3.5-3.5 1.414 1.414L3.414 18zm11.172 2l-1.793 1.793 1.414 1.414 3.5-3.5a1 1 0 000-1.414l-3.5-3.5-1.414 1.414L14.586 18H10v2h4.586z' />
        </svg>
    );
};

CashTransfer.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CashTransfer.displayName = 'CashTransfer';
export default CashTransfer;
