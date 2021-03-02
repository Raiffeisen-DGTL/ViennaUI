import React, { SVGAttributes } from 'react';

export interface TrolleyBusProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const TrolleyBus: React.FC<TrolleyBusProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M18 5a2 2 0 012 2v14a2 2 0 01-2 2h-2a1.994 1.994 0 01-1.723-1H9.723A1.994 1.994 0 018 23H6a2 2 0 01-2-2V7a2 2 0 012-2h2.586L5.929 2.343V2h2.485l2.515 2.515.485.485h2.172l-1.657-1.657-1-1V2h2.485l3 3H18zm0 16v-6H6v6h2v-1h8v1h2zm0-8V7H6v6h12zM7 16h2v2H7v-2zm8 0h2v2h-2v-2z' />
        </svg>
    );
};

TrolleyBus.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

TrolleyBus.displayName = 'TrolleyBus';
export default TrolleyBus;
