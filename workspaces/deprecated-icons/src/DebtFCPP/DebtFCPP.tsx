import React, { SVGAttributes } from 'react';

export interface DebtFCPPProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const DebtFCPP: React.FC<DebtFCPPProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M10 14.344h2V13h-2v-1.687h2V7h4a3 3 0 010 6h-2.312v1.344H17V16h-3.312v2H12v-2h-2v-1.656zM13.7 8.7v2.6H16a1.3 1.3 0 100-2.6h-2.3zM21.018 2c1.094 0 1.981.888 1.982 1.982v16.03c0 1.098-.89 1.987-1.988 1.988H6.559A1.559 1.559 0 015 20.441V14h2v6h14V4H7v6H5V3.982C5 2.888 5.888 2.001 6.982 2h14.036zM2 11.25h7V13H2v-1.75z' />
        </svg>
    );
};

DebtFCPP.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

DebtFCPP.displayName = 'DebtFCPP';
export default DebtFCPP;
