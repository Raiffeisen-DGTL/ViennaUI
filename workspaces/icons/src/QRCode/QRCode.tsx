import React, { SVGAttributes } from 'react';

export interface QRCodeProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const QRCode: React.FC<QRCodeProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M6.979 3A2.021 2.021 0 019 5.021v1.958A2.021 2.021 0 016.979 9H5.02A2.02 2.02 0 013 6.979V5.021A2.02 2.02 0 015.02 3h1.959zM7 7V5H5v2h2zM5.02 21A2.02 2.02 0 013 18.979v-1.958A2.02 2.02 0 015.02 15h1.959A2.021 2.021 0 019 17.021v1.958A2.021 2.021 0 016.979 21H5.02zM5 17v2h2v-2H5zM15 5.021A2.02 2.02 0 0117.02 3h1.959A2.021 2.021 0 0121 5.021v1.958A2.021 2.021 0 0118.979 9H17.02A2.02 2.02 0 0115 6.979V5.021zM19 7V5h-2v2h2zm-7-4h2v2h-2V3zm-9 9h2v2H3v-2zm2-2h3v2H5v-2zm3 2h2v2H8v-2zm2 2h2v2h-2v-2zm2-2h2v2h-2v-2zm-2 7h2v2h-2v-2zm9 0h2v2h-2v-2zm0-5h2v2h-2v-2zm-7 2h2v3h-2v-3zm5 0h2v3h-2v-3zm-3-2h3v2h-3v-2zm0 5h3v2h-3v-2zm0-9h3v2h-3v-2zm3 2h2v2h-2v-2zm-7-7h2v2h-2V5zm0 5h2v2h-2v-2zm2-3h2v3h-2V7zm7 3h2v2h-2v-2z' />
        </svg>
    );
};

QRCode.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

QRCode.displayName = 'QRCode';
export default QRCode;
