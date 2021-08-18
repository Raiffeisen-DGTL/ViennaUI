import React, { SVGAttributes } from 'react';

export interface MoneyProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Money: React.FC<MoneyProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M8.572 9.079C9.485 8.394 10.7 8 12 8c1.3 0 2.515.394 3.428 1.079C16.342 9.764 17 10.786 17 12c0 1.214-.658 2.236-1.572 2.921C14.515 15.606 13.3 16 12 16c-1.3 0-2.515-.394-3.428-1.079C7.658 14.236 7 13.214 7 12c0-1.214.658-2.236 1.572-2.921zM12 14c.91 0 1.694-.278 2.228-.679.535-.4.772-.878.772-1.321 0-.443-.237-.92-.772-1.321C13.694 10.278 12.91 10 12 10c-.91 0-1.694.278-2.228.679-.535.4-.772.878-.772 1.321 0 .443.237.92.772 1.321.534.401 1.319.679 2.228.679z'
                clipRule='evenodd'
            />
            <path
                fillRule='evenodd'
                d='M2 4h20a1 1 0 011 1v14a1 1 0 01-1 1H2a1 1 0 01-1-1V5a1 1 0 011-1zm15 14a4 4 0 014-4v-4a4 4 0 01-4-4H7a4 4 0 01-4 4v4a4 4 0 014 4h10zM3 8a2 2 0 002-2H3v2zm0 10v-2a2 2 0 012 2H3zm18-2a1.999 1.999 0 00-2 2h2v-2zm0-10v2a2 2 0 01-2-2h2z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Money.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Money.displayName = 'Money';
export default Money;
