import React, { SVGAttributes } from 'react';

export interface BrokerProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Broker: React.FC<BrokerProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M2 2h2v18h18v2H2V2z' />
            <path d='M13.655 15.121l7.703-6.602L20.056 7l-6.297 5.397-3.052-3.052L6 14.052l1.414 1.414 3.293-3.292 2.948 2.947z' />
        </svg>
    );
};

Broker.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Broker.displayName = 'Broker';
export default Broker;
