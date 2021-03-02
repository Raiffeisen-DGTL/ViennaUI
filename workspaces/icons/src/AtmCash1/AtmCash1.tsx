import React, { SVGAttributes } from 'react';

export interface AtmCash1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const AtmCash1: React.FC<AtmCash1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M2 2v2h20V2H2z' />
            <path
                fillRule='evenodd'
                d='M6 6v10a4 4 0 014 4h4a4 4 0 014-4V6h2v15a1 1 0 01-1 1H5a1 1 0 01-1-1V6h2zm0 14v-2a2 2 0 012 2H6zm12-2a2 2 0 00-2 2h2v-2z'
                clipRule='evenodd'
            />
            <path
                fillRule='evenodd'
                d='M12 6c-1.214 0-2.236.658-2.921 1.572C8.394 8.485 8 9.7 8 11c0 1.3.394 2.515 1.079 3.428C9.764 15.342 10.786 16 12 16c1.214 0 2.236-.658 2.921-1.572C15.606 13.515 16 12.3 16 11c0-1.3-.394-2.515-1.079-3.428C14.236 6.658 13.214 6 12 6zm-2 5c0-.91.278-1.694.679-2.228.4-.535.878-.772 1.321-.772.443 0 .92.237 1.321.772.401.534.679 1.319.679 2.228 0 .91-.278 1.694-.679 2.228-.4.535-.878.772-1.321.772-.443 0-.92-.237-1.321-.772C10.278 12.694 10 11.91 10 11z'
                clipRule='evenodd'
            />
        </svg>
    );
};

AtmCash1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

AtmCash1.displayName = 'AtmCash1';
export default AtmCash1;
