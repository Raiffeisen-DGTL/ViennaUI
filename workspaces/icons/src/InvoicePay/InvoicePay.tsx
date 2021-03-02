import React, { SVGAttributes } from 'react';

export interface InvoicePayProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const InvoicePay: React.FC<InvoicePayProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M3 2.5a1 1 0 00-1 1v2a1 1 0 00.106.447L2.882 7.5l-.776 1.553a1 1 0 000 .894l.776 1.553-.776 1.553a1 1 0 000 .894l.776 1.553-.776 1.553A1 1 0 002 17.5v1h2v-.764l.894-1.789a1 1 0 000-.894L4.118 13.5l.776-1.553a1 1 0 000-.894L4.118 9.5l.776-1.553a1 1 0 000-.894L4 5.263V4.5h14v8h2v-9a1 1 0 00-1-1H3zm1 20h2v-2H4v2z' />
            <path
                fillRule='evenodd'
                d='M8 16.5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4zm4 0h-2v4h2v-4zm6-2a2 2 0 00-2 2v4a2 2 0 002 2h2a2 2 0 002-2v-4a2 2 0 00-2-2h-2zm0 2h2v4h-2v-4z'
                clipRule='evenodd'
            />
        </svg>
    );
};

InvoicePay.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

InvoicePay.displayName = 'InvoicePay';
export default InvoicePay;
