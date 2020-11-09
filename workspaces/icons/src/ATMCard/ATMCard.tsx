import React, { SVGAttributes } from 'react';

export interface ATMCardProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ATMCard: React.FC<ATMCardProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M5 4v16h2v2H2v-2h1V3.982C3 2.888 3.888 2.001 4.982 2h10.036c1.094 0 1.981.888 1.982 1.982V11h-1.984V4H5zm7.3 2.7H7.7v2.6h4.6V6.7zM14 5v6H6V5h8zm5.979 7c1.116 0 2.021.905 2.021 2.021V20a2 2 0 01-2 2H10a2 2 0 01-2-2v-6a2 2 0 012-2h9.979zM20 14H10v1.234h10V14zm-10 6h10v-3H10v3z' />
        </svg>
    );
};

ATMCard.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ATMCard.displayName = 'ATMCard';
export default ATMCard;
