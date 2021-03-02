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
            <path d='M3 6h7v2H3V6zm15 0h3v2h-3v3h-2V8h-3V6h3V3h2v3zm-9.414 7.086L10 14.5l-2.043 2.043L10 18.586 8.586 20l-2.043-2.043L4.5 20l-1.414-1.414 2.043-2.043L3.086 14.5 4.5 13.086l2.043 2.043 2.043-2.043zM13 16h8v2h-8v-2zm3 3h2v2h-2v-2zm0-6h2v2h-2v-2z' />
        </svg>
    );
};

Calculator.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Calculator.displayName = 'Calculator';
export default Calculator;
