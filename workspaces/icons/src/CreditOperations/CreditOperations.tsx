import React, { SVGAttributes } from 'react';

export interface CreditOperationsProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CreditOperations: React.FC<CreditOperationsProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M22.207 8.293l-7-7-1.414 1.414L19.086 8H2v2h17.086l-4.793 4.793 1.414 1.414 6.5-6.5a1 1 0 000-1.414zM5 15.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM9.5 23a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm1.207-7.293l-7 7-1.414-1.414 7-7 1.414 1.414z' />
        </svg>
    );
};

CreditOperations.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CreditOperations.displayName = 'CreditOperations';
export default CreditOperations;
