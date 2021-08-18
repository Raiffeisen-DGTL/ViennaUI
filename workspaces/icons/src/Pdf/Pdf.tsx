import React, { SVGAttributes } from 'react';

export interface PdfProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Pdf: React.FC<PdfProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M15 20H3V4h12v4h2V3a1 1 0 00-1-1H2a1 1 0 00-1 1v18a1 1 0 001 1h13v-2z' />
            <path
                fillRule='evenodd'
                d='M7.13 15.25V18H5.553v-7.82h2.664c.773 0 1.389.24 1.847.72.462.48.693 1.102.693 1.869 0 .766-.227 1.371-.682 1.815-.455.444-1.085.666-1.89.666H7.13zm0-1.316h1.086c.3 0 .533-.098.698-.295.165-.197.247-.484.247-.86 0-.39-.084-.7-.253-.929a.808.808 0 00-.676-.354H7.13v2.438zM12.034 18v-7.82h2.068c.913 0 1.64.29 2.18.87.545.58.823 1.375.833 2.385v1.267c0 1.028-.272 1.835-.816 2.423-.54.583-1.287.875-2.24.875h-2.025zm1.58-6.504v5.193h.472c.526 0 .897-.137 1.112-.413.215-.28.327-.76.338-1.44v-1.359c0-.73-.102-1.238-.306-1.525-.204-.29-.551-.442-1.042-.456h-.575z'
                clipRule='evenodd'
            />
            <path d='M20.053 14.81h2.455v-1.311h-2.455v-2.003h2.75V10.18h-4.33V18h1.58v-3.19z' />
        </svg>
    );
};

Pdf.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Pdf.displayName = 'Pdf';
export default Pdf;
