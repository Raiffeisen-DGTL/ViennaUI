import React, { SVGAttributes } from 'react';

export interface MailProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Mail: React.FC<MailProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M11 5.273L9.273 7H8V5.727l4-3.999 4 3.999V7h-1.273L13 5.273V11h-2V5.273zM19.991 8A2.008 2.008 0 0122 10.012v10C22 21.11 21.11 22 20.012 22H3.969A1.968 1.968 0 012 20.031V10.009A2.008 2.008 0 014.009 8H10v2H5.519L12 15.671 17.338 11H19v1.2l-7 6.129-8-7V20h16V10h-6V8h5.991z' />
        </svg>
    );
};

Mail.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Mail.displayName = 'Mail';
export default Mail;
