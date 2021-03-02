import React, { SVGAttributes } from 'react';

export interface InvoiceSealProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const InvoiceSeal: React.FC<InvoiceSealProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M4 3a1 1 0 00-1 1v1.528a3 3 0 00.317 1.342l.341.683a1 1 0 010 .894l-.105.211a3 3 0 000 2.684l.105.21a1 1 0 010 .895l-.105.211a3 3 0 000 2.684l.105.21a1 1 0 010 .895l-.341.684A3 3 0 003 18.472V20a1 1 0 001 1h8v-2H5v-.528a1 1 0 01.106-.447l.341-.683a3 3 0 000-2.684l-.105-.21a1 1 0 010-.895l.105-.211a3 3 0 000-2.684l-.105-.21a1 1 0 010-.895l.105-.211a3 3 0 000-2.684l-.341-.683A1 1 0 015 5.528V5h14v6.5h2V4a1 1 0 00-1-1H4z' />
            <path d='M8 9h9V7H8v2zm6 4H8v-2h6v2z' />
            <path
                fillRule='evenodd'
                d='M18.504 13.136a1 1 0 00-1.008 0l-3 1.75a1 1 0 00-.496.864v3.5a1 1 0 00.496.864l3 1.75a1 1 0 001.008 0l3-1.75A1 1 0 0022 19.25v-3.5a1 1 0 00-.496-.864l-3-1.75zM16 18.676v-2.352l2-1.166 2 1.166v2.352l-2 1.166-2-1.166z'
                clipRule='evenodd'
            />
        </svg>
    );
};

InvoiceSeal.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

InvoiceSeal.displayName = 'InvoiceSeal';
export default InvoiceSeal;
