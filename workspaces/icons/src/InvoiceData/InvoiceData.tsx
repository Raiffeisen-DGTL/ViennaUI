import React, { SVGAttributes } from 'react';

export interface InvoiceDataProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const InvoiceData: React.FC<InvoiceDataProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M18 3a1 1 0 00-1-1H3a1 1 0 00-1 1v18a1 1 0 001 1h9v-2H4V4h12v5h2V3zm-2.82 12.427l3.5-5 1.64 1.146L17.92 15H21a1 1 0 01.76 1.65l-6 7-1.52-1.3L18.827 17H16a1 1 0 01-.82-1.573z'
                clipRule='evenodd'
            />
        </svg>
    );
};

InvoiceData.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

InvoiceData.displayName = 'InvoiceData';
export default InvoiceData;
