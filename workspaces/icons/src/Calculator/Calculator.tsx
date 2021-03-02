import React, { SVGAttributes } from 'react';

export interface CalculatorProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Calculator: React.FC<CalculatorProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M17 11V7h-4V5h4V1h2v4h4v2h-4v4h-2zM9 7H1V5h8v2zm5 12h8v2h-8v-2zm8-4h-8v2h8v-2z' />
            <path
                fillRule='evenodd'
                d='M5 19.414l2.793 2.793 1.414-1.414L6.414 18l2.793-2.793-1.414-1.414L5 16.586l-2.793-2.793-1.414 1.414L3.586 18 .793 20.793l1.414 1.414L5 19.414z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Calculator.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Calculator.displayName = 'Calculator';
export default Calculator;
