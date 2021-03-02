import React, { SVGAttributes } from 'react';

export interface TargetAccountProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const TargetAccount: React.FC<TargetAccountProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M8 6h10v2H8V6zm3.754 11A3.891 3.891 0 019 19.754V22H7v-2.246A3.891 3.891 0 014.246 17H2v-2h2.246A3.891 3.891 0 017 12.246V10h2v2.246A3.891 3.891 0 0111.754 15H14v2h-2.246zM8 18.1a2.1 2.1 0 100-4.2 2.1 2.1 0 000 4.2zM20 2a2 2 0 012 2v16.012c0 1.098-.89 1.987-1.988 1.988H10v-1.422c.345-.155.672-.349.973-.578H20V4H6v7.424a5.008 5.008 0 00-2 1.605V4a2 2 0 012-2h14z' />
        </svg>
    );
};

TargetAccount.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

TargetAccount.displayName = 'TargetAccount';
export default TargetAccount;
