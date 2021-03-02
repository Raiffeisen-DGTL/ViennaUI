import React, { SVGAttributes } from 'react';

export interface BankAndHomeProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const BankAndHome: React.FC<BankAndHomeProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M17.64 1.232a1 1 0 00-1.28 0l-6 5A1 1 0 0010 7v1h2v-.532l5-4.166 5 4.166V9h-1v4h-2V9h-2v4h-1v2h6a1 1 0 001-1V9h1V7a1 1 0 00-.36-.768l-6-5z' />
            <path
                fillRule='evenodd'
                d='M7.447 8.106a1 1 0 00-.894 0l-6 3A1 1 0 000 12v1a1 1 0 001 1h12a1 1 0 001-1v-1a1 1 0 00-.553-.894l-6-3zM10.764 12H3.236L7 10.118 10.764 12z'
                clipRule='evenodd'
            />
            <path d='M0 20v2h14v-2h-2v-4h-2v4H8v-4H6v4H4v-4H2v4H0z' />
        </svg>
    );
};

BankAndHome.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

BankAndHome.displayName = 'BankAndHome';
export default BankAndHome;
