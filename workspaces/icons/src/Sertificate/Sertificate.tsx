import React, { SVGAttributes } from 'react';

export interface SertificateProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Sertificate: React.FC<SertificateProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M2 19a1 1 0 001 1h9v-2H4V6h16v6h2V5a1 1 0 00-1-1H3a1 1 0 00-1 1v14z' />
            <path d='M6 10h12V8H6v2zm8 2H6v2h8v-2z' />
            <path
                fillRule='evenodd'
                d='M14.445 15.168l3-2a1 1 0 011.11 0l3 2A1 1 0 0122 16v3a1 1 0 01-.445.832l-3 2a1 1 0 01-1.11 0l-3-2A1 1 0 0114 19v-3a1 1 0 01.445-.832zM20 18.465v-1.93l-2-1.333-2 1.333v1.93l2 1.333 2-1.333z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Sertificate.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Sertificate.displayName = 'Sertificate';
export default Sertificate;
