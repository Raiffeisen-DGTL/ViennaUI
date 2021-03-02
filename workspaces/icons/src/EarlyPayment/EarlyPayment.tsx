import React, { SVGAttributes } from 'react';

export interface EarlyPaymentProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const EarlyPayment: React.FC<EarlyPaymentProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M19 11v6h-7v2h8a1 1 0 001-1V4a1 1 0 00-1-1h-4V1h-2v2h-4V1H8v2H4a1 1 0 00-1 1v7h16zM8 7V5H5v4h14V5h-3v2h-2V5h-4v2H8z'
                clipRule='evenodd'
            />
            <path d='M4.5 15a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm6 6a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-7.293 1.207l7-7-1.414-1.414-7 7 1.414 1.414zM17 14a1 1 0 11-2 0 1 1 0 012 0z' />
        </svg>
    );
};

EarlyPayment.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

EarlyPayment.displayName = 'EarlyPayment';
export default EarlyPayment;
