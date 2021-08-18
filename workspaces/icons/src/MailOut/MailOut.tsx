import React, { SVGAttributes } from 'react';

export interface MailOutProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const MailOut: React.FC<MailOutProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M11.293 1.293a1 1 0 011.414 0l4 4-1.414 1.414L13 4.414V11h-2V4.414L8.707 6.707 7.293 5.293l4-4z' />
            <path
                fillRule='evenodd'
                d='M3 8a1 1 0 00-1 1v12a1 1 0 001 1h18a1 1 0 001-1V9a1 1 0 00-1-1h-6v2h3.334L12 14.75 5.667 10H9V8H3zm1 3.25V20h16v-8.75l-7.4 5.55a1 1 0 01-1.2 0L4 11.25z'
                clipRule='evenodd'
            />
        </svg>
    );
};

MailOut.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

MailOut.displayName = 'MailOut';
export default MailOut;
