import React, { SVGAttributes } from 'react';

export interface CashOperationProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CashOperation: React.FC<CashOperationProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M22 4a1 1 0 00-1-1H3a1 1 0 00-1 1v5h2V6.915A1.5 1.5 0 005.915 5h12.17A1.5 1.5 0 0020 6.915v5.17A1.5 1.5 0 0018.085 14H16v2h5a1 1 0 001-1V4zM1.293 16.293l5-5 1.414 1.414L4.414 16H14v2H4.414l3.293 3.293-1.414 1.414-5-5a1 1 0 010-1.414z' />
        </svg>
    );
};

CashOperation.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CashOperation.displayName = 'CashOperation';
export default CashOperation;
