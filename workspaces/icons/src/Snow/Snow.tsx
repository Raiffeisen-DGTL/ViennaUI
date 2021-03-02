import React, { SVGAttributes } from 'react';

export interface SnowProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Snow: React.FC<SnowProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M9.704 2.457A6 6 0 0118 8a5 5 0 110 10v-2a3 3 0 10-.853-5.876 1 1 0 01-1.257-1.192A4 4 0 108 8a1 1 0 01-1 1h-.5a3.5 3.5 0 00-.5 6.964v2.013a5.5 5.5 0 01.081-10.961 6 6 0 013.623-4.56z' />
            <path d='M13 14h-2v2.768l-2.396-1.384-1 1.732L10 18.5l-2.397 1.384 1 1.732L11 20.232V23h2v-2.768l2.398 1.384 1-1.732L14 18.5l2.397-1.384-1-1.732L13 16.768V14z' />
        </svg>
    );
};

Snow.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Snow.displayName = 'Snow';
export default Snow;
