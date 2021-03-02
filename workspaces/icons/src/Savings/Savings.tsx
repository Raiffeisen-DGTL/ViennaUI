import React, { SVGAttributes } from 'react';

export interface SavingsProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Savings: React.FC<SavingsProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M6 3a1 1 0 011-1h14a1 1 0 011 1v18a1 1 0 01-1 1h-4v-2h3V4H8v6H6V3z'
                clipRule='evenodd'
            />
            <path d='M6 14a2 2 0 11-4 0 2 2 0 014 0zm8 6a2 2 0 11-4 0 2 2 0 014 0z' />
            <path fillRule='evenodd' d='M13.207 13.207l-9 9-1.414-1.414 9-9 1.414 1.414z' clipRule='evenodd' />
        </svg>
    );
};

Savings.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Savings.displayName = 'Savings';
export default Savings;
