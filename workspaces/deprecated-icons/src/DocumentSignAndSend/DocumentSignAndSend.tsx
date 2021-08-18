import React, { SVGAttributes } from 'react';

export interface DocumentSignAndSendProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const DocumentSignAndSend: React.FC<DocumentSignAndSendProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M9.337 22H3.559A1.559 1.559 0 012 20.441V3.559C2 2.698 2.698 2 3.559 2h14.882A1.559 1.559 0 0120 3.564V14h-2V4H4v16h3.6a5.525 5.525 0 001.737 2zM6 6h10v2H6V6zm0 4h7v2H6v-2zm11.287 11.311v-1.414h-1.792a3.85 3.85 0 110-4.7h6.25v6.114h-4.458zm1.7-3.114v1.414h1.057v-2.714h-5.49l-.246-.424a2.154 2.154 0 00-3.384-.446 2.15 2.15 0 103.384 2.595l.245-.425h4.434zm-5.835.057a1 1 0 11-1.414-1.414 1 1 0 011.414 1.414z' />
        </svg>
    );
};

DocumentSignAndSend.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

DocumentSignAndSend.displayName = 'DocumentSignAndSend';
export default DocumentSignAndSend;
