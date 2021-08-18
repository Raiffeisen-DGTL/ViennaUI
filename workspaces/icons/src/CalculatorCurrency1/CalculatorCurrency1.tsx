import React, { SVGAttributes } from 'react';

export interface CalculatorCurrency1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CalculatorCurrency1: React.FC<CalculatorCurrency1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M22.772 3.852A3 3 0 0120 8h-3v1h4v2h-4v3h-2v-3h-1V9h1V8h-1V6h1V2h5a3 3 0 012.772 1.852zM17 6h3a1 1 0 000-2h-3v2z'
                clipRule='evenodd'
            />
            <path d='M4 5H2v2h2V5zm0 16v1h2v-1a3 3 0 100-6H4a1 1 0 110-2h2a1 1 0 011 1h2a3 3 0 00-3-3v-1H4v1a3 3 0 100 6h2a1 1 0 110 2H4a1 1 0 01-1-1H1a3 3 0 003 3zm10-3h-2v2h2v-2zM6 5h2v2H6V5zm6 0h-2v2h2V5zm6 13h-2v2h2v-2zm2 0h2v2h-2v-2z' />
        </svg>
    );
};

CalculatorCurrency1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CalculatorCurrency1.displayName = 'CalculatorCurrency1';
export default CalculatorCurrency1;
