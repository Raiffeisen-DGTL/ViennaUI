import React, { SVGAttributes } from 'react';

export interface CreditOperations1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CreditOperations1: React.FC<CreditOperations1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M1.793 8.293l7-7 1.414 1.414L4.914 8H22v2H4.914l4.793 4.793-1.414 1.414-6.5-6.5a1 1 0 010-1.414zM16 15.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm4.5 7.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm1.207-7.293l-7 7-1.414-1.414 7-7 1.414 1.414z' />
        </svg>
    );
};

CreditOperations1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CreditOperations1.displayName = 'CreditOperations1';
export default CreditOperations1;
