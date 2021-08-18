import React, { SVGAttributes } from 'react';

export interface InvoiceInfoProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const InvoiceInfo: React.FC<InvoiceInfoProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1v-1.528a3 3 0 01.317-1.341l.341-.684a1 1 0 000-.894l-.105-.211a3 3 0 010-2.684l.105-.21a1 1 0 000-.895l-.105-.211a3 3 0 010-2.684l.105-.21a1 1 0 000-.895l-.341-.683A3 3 0 013 5.527V4zm2 1v.528a1 1 0 00.106.447l.341.683a3 3 0 010 2.684l-.105.21a1 1 0 000 .895l.105.211a3 3 0 010 2.684l-.105.21a1 1 0 000 .895l.105.211a3 3 0 010 2.684l-.341.683a1 1 0 00-.106.447V19h14V5H5z'
                clipRule='evenodd'
            />
            <path
                fillRule='evenodd'
                d='M17 9h-5V7h5v2zm-1 4h-4v-2h4v2zm1 4h-5v-2h5v2zm-7-6v6H8v-6h2z'
                clipRule='evenodd'
            />
            <path d='M10.25 8.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z' />
        </svg>
    );
};

InvoiceInfo.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

InvoiceInfo.displayName = 'InvoiceInfo';
export default InvoiceInfo;
