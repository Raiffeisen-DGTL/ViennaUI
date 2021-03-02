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
            <path d='M3 3a1 1 0 011-1h16a1 1 0 011 1v18a1 1 0 01-1 1H4a1 1 0 01-1-1v-6h2v5h14V4H5v5H3V3z' />
            <path
                fillRule='evenodd'
                d='M11 15v3H9v-3H7v-2h2v-1H7v-2h2V6h5a3 3 0 010 6h-3v1h4v2h-4zm3-5a1 1 0 000-2h-3v2h3z'
                clipRule='evenodd'
            />
            <path d='M1 13v-2h4v2H1z' />
        </svg>
    );
};

DebtFCPP.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

DebtFCPP.displayName = 'DebtFCPP';
export default DebtFCPP;
