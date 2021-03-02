import React, { SVGAttributes } from 'react';

export interface TaxiProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Taxi: React.FC<TaxiProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M9 10H7v2h2v2h2v-2h2v2h2v-2h2v-2h-2v2h-2v-2h-2v2H9v-2z' />
            <path
                fillRule='evenodd'
                d='M3.884 7.703A2 2 0 015.862 6h12.277a2 2 0 011.978 1.703L21.362 16H23v2H1v-2h1.64l1.244-8.297zM5.862 8h12.277l1.2 8H4.663l1.2-8z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Taxi.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Taxi.displayName = 'Taxi';
export default Taxi;
