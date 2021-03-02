import React, { SVGAttributes } from 'react';

export interface RoubleCashflowProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const RoubleCashflow: React.FC<RoubleCashflowProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M11.772 3.852A3 3 0 019 8H6v1h4v2H6v3H4v-3H2V9h2V8H2V6h2V2h5a3 3 0 012.772 1.852zM6 6h3a1 1 0 000-2H6v2z'
                clipRule='evenodd'
            />
            <path d='M20 11V8.414l-5.293 5.293-1.414-1.414L18.586 7H16V5h5a1 1 0 011 1v5h-2zm-6.5 7.586V16h-2v5a1 1 0 001 1H18v-2h-3.086l5.293-5.293-1.414-1.414-5.293 5.293z' />
        </svg>
    );
};

RoubleCashflow.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

RoubleCashflow.displayName = 'RoubleCashflow';
export default RoubleCashflow;
