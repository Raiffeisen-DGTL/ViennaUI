import React, { SVGAttributes } from 'react';

export interface AtmCash2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const AtmCash2: React.FC<AtmCash2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M2 22h2V2H2v20z' />
            <path
                fillRule='evenodd'
                d='M6 18h10a4 4 0 014-4v-4a4 4 0 01-4-4H6V4h15a1 1 0 011 1v14a1 1 0 01-1 1H6v-2zm14 0h-2a2 2 0 012-2v2zM18 6a2 2 0 002 2V6h-2z'
                clipRule='evenodd'
            />
            <path
                fillRule='evenodd'
                d='M6 12c0 1.214.658 2.236 1.572 2.921C8.485 15.606 9.7 16 11 16c1.3 0 2.515-.394 3.428-1.079C15.342 14.236 16 13.214 16 12c0-1.214-.658-2.236-1.572-2.921C13.515 8.394 12.3 8 11 8c-1.3 0-2.515.394-3.428 1.079C6.658 9.764 6 10.786 6 12zm5 2c-.91 0-1.694-.278-2.228-.679C8.237 12.921 8 12.443 8 12c0-.443.237-.92.772-1.321C9.306 10.278 10.09 10 11 10c.91 0 1.694.278 2.228.679.535.4.772.878.772 1.321 0 .443-.237.92-.772 1.321-.534.401-1.319.679-2.228.679z'
                clipRule='evenodd'
            />
        </svg>
    );
};

AtmCash2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

AtmCash2.displayName = 'AtmCash2';
export default AtmCash2;
