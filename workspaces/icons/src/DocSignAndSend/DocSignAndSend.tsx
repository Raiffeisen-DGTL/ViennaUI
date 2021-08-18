import React, { SVGAttributes } from 'react';

export interface DocSignAndSendProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const DocSignAndSend: React.FC<DocSignAndSendProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M19 3a1 1 0 00-1-1H4a1 1 0 00-1 1v18a1 1 0 001 1h4v-2H5V4h12v9h2V3z' />
            <path
                fillRule='evenodd'
                d='M10 18a3 3 0 015.83-1H21a1 1 0 011 1v3h-2v-2h-4.17A3.001 3.001 0 0110 18zm3-1a1 1 0 100 2 1 1 0 000-2z'
                clipRule='evenodd'
            />
        </svg>
    );
};

DocSignAndSend.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

DocSignAndSend.displayName = 'DocSignAndSend';
export default DocSignAndSend;
