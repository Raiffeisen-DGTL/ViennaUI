import React, { SVGAttributes } from 'react';

export interface PrinterProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Printer: React.FC<PrinterProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M7 13a1 1 0 100-2 1 1 0 000 2z' />
            <path
                fillRule='evenodd'
                d='M18 4v3h2a2 2 0 012 2v11a1 1 0 01-1 1H3a1 1 0 01-1-1V9a2 2 0 012-2h2V4a1 1 0 011-1h10a1 1 0 011 1zm-2 1v2H8V5h8zm4 4H4v10h3v-3a1 1 0 011-1h8a1 1 0 011 1v3h3V9zm-5 10v-2H9v2h6z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Printer.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Printer.displayName = 'Printer';
export default Printer;
