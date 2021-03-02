import React, { SVGAttributes } from 'react';

export interface CreditPayFullProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CreditPayFull: React.FC<CreditPayFullProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M7 16v-3h2v2.586l1.707 1.707-1.414 1.414-2-2A1 1 0 017 16z'
                clipRule='evenodd'
            />
            <path
                fillRule='evenodd'
                d='M8 11.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zM1.5 16a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z'
                clipRule='evenodd'
            />
            <path d='M21 2a1 1 0 011 1v12a1 1 0 01-1 1h-5v-2h2.085A1.5 1.5 0 0120 12.085v-6.17A1.5 1.5 0 0118.085 4H5.915A1.5 1.5 0 014 5.915V9H2V3a1 1 0 011-1h18z' />
        </svg>
    );
};

CreditPayFull.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CreditPayFull.displayName = 'CreditPayFull';
export default CreditPayFull;
