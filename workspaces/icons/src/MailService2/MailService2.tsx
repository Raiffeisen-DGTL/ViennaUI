import React, { SVGAttributes } from 'react';

export interface MailService2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const MailService2: React.FC<MailService2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M20 3H4v2h16V3z' />
            <path
                fillRule='evenodd'
                d='M2 8a1 1 0 011-1h18a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V8zm2 11v-8.75l7.4 5.55a1 1 0 001.2 0l7.4-5.55V19H4zM5.667 9h12.666L12 13.75 5.667 9z'
                clipRule='evenodd'
            />
        </svg>
    );
};

MailService2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

MailService2.displayName = 'MailService2';
export default MailService2;
