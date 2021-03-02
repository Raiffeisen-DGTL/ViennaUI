import React, { SVGAttributes } from 'react';

export interface CalculatorCurrency2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CalculatorCurrency2: React.FC<CalculatorCurrency2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M1.293 4.293l3.5-3.5 1.414 1.414L4.414 4H10v2H4.414l1.793 1.793-1.414 1.414-3.5-3.5a1 1 0 010-1.414zm17.914 10.5l3.5 3.5a1 1 0 010 1.414l-3.5 3.5-1.414-1.414L19.586 20H14v-2h5.586l-1.793-1.793 1.414-1.414zM2 15a3 3 0 013-3v-1h2v1a3 3 0 013 3H8a1 1 0 00-1-1H5a1 1 0 100 2h2a3 3 0 110 6v1H5v-1a3 3 0 01-3-3h2a1 1 0 001 1h2a1 1 0 100-2H5a3 3 0 01-3-3z' />
            <path
                fillRule='evenodd'
                d='M21.772 2.852A3 3 0 0119 7h-3v1h4v2h-4v3h-2v-3h-1V8h1V7h-1V5h1V1h5a3 3 0 012.772 1.852zM16 5h3a1 1 0 000-2h-3v2z'
                clipRule='evenodd'
            />
        </svg>
    );
};

CalculatorCurrency2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CalculatorCurrency2.displayName = 'CalculatorCurrency2';
export default CalculatorCurrency2;
