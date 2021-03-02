import React, { SVGAttributes } from 'react';

export interface BankIntroductionProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const BankIntroduction: React.FC<BankIntroductionProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M7 19.869L8.868 18H2v-2h6.868L7 14.131V13h.999l4.133 4-4.001 4H7v-1.131zM21 20l1 1v1H10l2-2h9zm-8-8h2v7h-2v-7zm4 0h2v7h-2v-7zM3 9h18v2H3V9zm9-4.764L4.473 8H3V6.5L12 2l9 4.5V8h-1.473L12 4.236z' />
        </svg>
    );
};

BankIntroduction.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

BankIntroduction.displayName = 'BankIntroduction';
export default BankIntroduction;
