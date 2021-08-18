import React, { SVGAttributes } from 'react';

export interface InvoiceFilterProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const InvoiceFilter: React.FC<InvoiceFilterProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M2 3.5a1 1 0 011-1h16a1 1 0 011 1v6h-2v-5H4v.764l.894 1.789a1 1 0 010 .894L4.118 9.5l.776 1.553a1 1 0 010 .894L4.118 13.5l.776 1.553a1 1 0 010 .894L4 17.737v.763h5v2H3a1 1 0 01-1-1v-2a1 1 0 01.106-.447l.776-1.553-.776-1.553a1 1 0 010-.894l.776-1.553-.776-1.553a1 1 0 010-.894L2.882 7.5l-.776-1.553A1 1 0 012 5.5v-2z' />
            <path
                fillRule='evenodd'
                d='M15 23.5a3.001 3.001 0 01-2.83-2H11v-2h1.17a3.001 3.001 0 015.66 0H23v2h-5.17a3.001 3.001 0 01-2.83 2zm0-4a1 1 0 100 2 1 1 0 000-2zm6.83-6a3.001 3.001 0 00-5.66 0H11v2h5.17a3.001 3.001 0 005.66 0H23v-2h-1.17zm-1.83 1a1 1 0 11-2 0 1 1 0 012 0z'
                clipRule='evenodd'
            />
        </svg>
    );
};

InvoiceFilter.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

InvoiceFilter.displayName = 'InvoiceFilter';
export default InvoiceFilter;
