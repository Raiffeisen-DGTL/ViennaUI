import React, { SVGAttributes } from 'react';

export interface PayProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Pay: React.FC<PayProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M16 13h2v2h-2v-2zM5 5a1 1 0 100 2h17v12a2 2 0 01-2 2H4a2 2 0 01-2-2V5.672l.03.034A2.993 2.993 0 015 3h17v2H5zm0 4a2.947 2.947 0 01-1-.185V19h16V9H5z' />
        </svg>
    );
};

Pay.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Pay.displayName = 'Pay';
export default Pay;
