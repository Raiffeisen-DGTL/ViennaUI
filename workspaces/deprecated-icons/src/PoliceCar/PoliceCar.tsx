import React, { SVGAttributes } from 'react';

export interface PoliceCarProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const PoliceCar: React.FC<PoliceCarProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M9.333 6.056l.351-1.051a1.387 1.387 0 012.632 0l.35 1.051h.413a6.38 6.38 0 015.35 2.9l.714 1.1h.586A3.271 3.271 0 0123 13.327v1.813a1.916 1.916 0 01-1.917 1.916h-1.32a1.999 1.999 0 01-3.721-1.021 2 2 0 013.744-.979H21v-1.729a1.272 1.272 0 00-1.276-1.275h-.786v.004H4.75l1.281-2h10.728l-.006-.01a4.365 4.365 0 00-3.674-1.994H2.974l-.943-.937V6.056h7.302zm-1.589 9H15v2H7.72A1.999 1.999 0 014 16.035a2 2 0 013.744-.979zM1 11.753l1.8-2.697h2.45L3 12.356v4.7h-.083A1.916 1.916 0 011 15.14v-3.387z' />
        </svg>
    );
};

PoliceCar.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

PoliceCar.displayName = 'PoliceCar';
export default PoliceCar;
