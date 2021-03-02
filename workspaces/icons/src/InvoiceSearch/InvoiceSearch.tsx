import React, { SVGAttributes } from 'react';

export interface InvoiceSearchProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const InvoiceSearch: React.FC<InvoiceSearchProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M6 4.118l.658.33a3 3 0 002.684 0l.21-.106a1 1 0 01.895 0l.211.105a3 3 0 002.684 0l.21-.105a1 1 0 01.895 0l.211.105a3 3 0 002.684 0L18 4.118V10.5h2V3a1 1 0 00-1-1h-.528a3 3 0 00-1.341.317l-.684.341a1 1 0 01-.894 0l-.211-.105a3 3 0 00-2.684 0l-.21.105a1 1 0 01-.895 0l-.211-.105a3 3 0 00-2.684 0l-.21.105a1 1 0 01-.895 0l-.683-.341A3 3 0 005.527 2H5a1 1 0 00-1 1v18a1 1 0 001 1h.528a3 3 0 001.342-.317l.683-.341a1 1 0 01.894 0l.068.033a3 3 0 003.005-.187l.535-.356-1.11-1.664-.534.356a1 1 0 01-1.002.063l-.067-.034a3 3 0 00-2.684 0L6 19.882V4.118z' />
            <path
                fillRule='evenodd'
                d='M12 16a4 4 0 117.446 2.032l2.261 2.26-1.414 1.415-2.261-2.26A4 4 0 0112 16zm4-2a2 2 0 100 4 2 2 0 000-4z'
                clipRule='evenodd'
            />
        </svg>
    );
};

InvoiceSearch.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

InvoiceSearch.displayName = 'InvoiceSearch';
export default InvoiceSearch;
