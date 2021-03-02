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
            <path d='M21 4a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1h18zm-1 3.248L12.6 12.8a1 1 0 01-1.2 0L4 7.249V18h16V7.248zM18.331 6H5.668L12 10.75 18.331 6z' />
        </svg>
    );
};

Mail.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Mail.displayName = 'Mail';
export default Mail;
