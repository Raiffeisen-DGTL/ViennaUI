import React, { SVGAttributes } from 'react';

export interface MortgageProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Mortgage: React.FC<MortgageProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M11.625 2.22a1 1 0 00-1.25 0l-8 6.4A1 1 0 002 9.4V12a1 1 0 001 1h1v7a1 1 0 001 1h4v-2H6v-8H4V9.88l7-5.6 7.375 5.9 1.25-1.56-8-6.4zM20 17.5a2 2 0 100 4 2 2 0 000-4z' />
            <path d='M10 13.5a2 2 0 114 0 2 2 0 01-4 0zm2.207 8.207l9-9-1.414-1.414-9 9 1.414 1.414z' />
        </svg>
    );
};

Mortgage.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Mortgage.displayName = 'Mortgage';
export default Mortgage;
