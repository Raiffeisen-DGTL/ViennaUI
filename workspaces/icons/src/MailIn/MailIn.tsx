import React, { SVGAttributes } from 'react';

export interface MailInProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const MailIn: React.FC<MailInProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M3 2a1 1 0 00-1 1v12a1 1 0 001 1h3v-2H4V5.045l7.386 5.744a1 1 0 001.228 0L20 5.044V14h-2v2h3a1 1 0 001-1V3a1 1 0 00-1-1H3zm2.914 2L12 8.733 18.085 4H5.915z'
                clipRule='evenodd'
            />
            <path d='M13 16.414V23h-2v-6.586l-2.293 2.293-1.414-1.414 4-4a1 1 0 011.414 0l4 4-1.414 1.414L13 16.414z' />
        </svg>
    );
};

MailIn.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

MailIn.displayName = 'MailIn';
export default MailIn;
