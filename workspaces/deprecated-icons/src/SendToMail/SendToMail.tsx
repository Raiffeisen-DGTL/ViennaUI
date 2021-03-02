import React, { SVGAttributes } from 'react';

export interface SendToMailProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const SendToMail: React.FC<SendToMailProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M19.991 1A2.008 2.008 0 0122 3.012v10c0 1.098-.89 1.987-1.988 1.988H14v-2h6V3H5.519L12 8.671 17.338 4H19v1.2l-7 6.129-8-7V13h6v2H3.969A1.969 1.969 0 012 13.031V3.009A2.008 2.008 0 014.009 1h15.982zM13 18.728L14.727 17H16v1.273l-4 3.999-4-3.999V17h1.273L11 18.728V13h2v5.728z' />
        </svg>
    );
};

SendToMail.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

SendToMail.displayName = 'SendToMail';
export default SendToMail;
