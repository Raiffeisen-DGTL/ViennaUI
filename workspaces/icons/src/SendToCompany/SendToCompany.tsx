import React, { SVGAttributes } from 'react';

export interface SendToCompanyProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const SendToCompany: React.FC<SendToCompanyProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M5 1h14v19h2v2H11v-2h2v-3h2v3h2V3H7v10H5V1z' />
            <path d='M9 11h6V9H9v2zm6 4H9v-2h6v2zM9 7h6V5H9v2zm.707 12.707l-3.5 3.5-1.414-1.414L6.586 20H0v-2h6.586l-1.793-1.793 1.414-1.414 3.5 3.5a1 1 0 010 1.414z' />
        </svg>
    );
};

SendToCompany.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

SendToCompany.displayName = 'SendToCompany';
export default SendToCompany;
