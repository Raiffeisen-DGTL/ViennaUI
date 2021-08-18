import React, { SVGAttributes } from 'react';

export interface RetryWithErrorsProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const RetryWithErrors: React.FC<RetryWithErrorsProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M5.5 12a7.5 7.5 0 0113.22-4.853l1.524-1.294A9.5 9.5 0 003.52 12.616l-1.315-1.027-1.23 1.576 3.342 2.612a1 1 0 001.404-.173l2.612-3.343-1.576-1.231-1.233 1.578A7.615 7.615 0 015.5 12zm18.295.411l-1.315-1.027a9.5 9.5 0 01-16.723 6.763l1.524-1.294a7.5 7.5 0 0013.195-5.46l-1.233 1.577-1.576-1.231 2.612-3.343a1 1 0 011.404-.173l3.343 2.612-1.231 1.576z' />
            <path d='M9.293 9.707L11.586 12l-2.293 2.293 1.414 1.414L13 13.414l2.293 2.293 1.414-1.414L14.414 12l2.293-2.293-1.414-1.414L13 10.586l-2.293-2.293-1.414 1.414z' />
        </svg>
    );
};

RetryWithErrors.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

RetryWithErrors.displayName = 'RetryWithErrors';
export default RetryWithErrors;
