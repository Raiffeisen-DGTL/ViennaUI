import React, { SVGAttributes } from 'react';

export interface BankHomeProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const BankHome: React.FC<BankHomeProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M16 21l1 1v1H2v-1l1-1h13zM4 15h2v5H4v-5zm3 0h2v5H7v-5zm3 0h2v5h-2v-5zm3 0h2v5h-2v-5zM2 12h15v2H2v-2zm7.5-3l-6.119 2H2V9.5l7.5-2.736L17 9.5V11h-1.381L9.5 9zm9.5 2h2v7h-5.063v-2H19v-5zm-3-8.28l7 7.007V11h-1.272L16 5.267l-1.799 1.8-1.862-.682L16 2.72z' />
        </svg>
    );
};

BankHome.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

BankHome.displayName = 'BankHome';
export default BankHome;
