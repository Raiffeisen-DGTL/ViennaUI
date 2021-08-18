import React, { SVGAttributes } from 'react';

export interface ToPayProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ToPay: React.FC<ToPayProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M19.141 19A9.968 9.968 0 0022 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.968 9.968 0 002.859 7H2v2h20v-2h-2.859zM12 4a8 8 0 00-3.876 15H9v-2H8v-2h1v-1H8v-2h1V8h4a3 3 0 010 6h-2v1h3v2h-3v2h4.876A8 8 0 0012 4zm1 8a1.001 1.001 0 000-2h-2v2h2z'
                clipRule='evenodd'
            />
        </svg>
    );
};

ToPay.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ToPay.displayName = 'ToPay';
export default ToPay;
