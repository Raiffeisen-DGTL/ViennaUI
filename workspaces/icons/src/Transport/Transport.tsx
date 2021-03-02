import React, { SVGAttributes } from 'react';

export interface TransportProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Transport: React.FC<TransportProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M1 7h3v6H1v2h22v-2h-1.307l-2.757-7.351A1 1 0 0018 5H1v2zm11 0v6H6V7h6zm7.557 6H14V7h3.307l2.25 6z'
                clipRule='evenodd'
            />
            <path d='M10 17v2h4v-2h-4zm12 2h-4v-2h4v2zM2 19h4v-2H2v2z' />
        </svg>
    );
};

Transport.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Transport.displayName = 'Transport';
export default Transport;
