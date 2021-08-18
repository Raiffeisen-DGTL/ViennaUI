import React, { SVGAttributes } from 'react';

export interface MailService1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const MailService1: React.FC<MailService1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M7 4h10V2H7v2zm12 4H5V6h14v2z' />
            <path
                fillRule='evenodd'
                d='M3 11a1 1 0 011-1h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V11zm4 1l5 3.75L17 12H7zm12 1l-6.4 4.8a1 1 0 01-1.2 0L5 13v7h14v-7z'
                clipRule='evenodd'
            />
        </svg>
    );
};

MailService1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

MailService1.displayName = 'MailService1';
export default MailService1;
