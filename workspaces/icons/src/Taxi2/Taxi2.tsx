import React, { SVGAttributes } from 'react';

export interface Taxi2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Taxi2: React.FC<Taxi2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M7 10h2v2H7v-2zm2 2h2v2H9v-2zm4 0h2v2h-2v-2zm-2-2h2v2h-2v-2zm4 0h2v2h-2v-2zm-3 12C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10zm0-18a8 8 0 108 8 8.009 8.009 0 00-8-8z' />
        </svg>
    );
};

Taxi2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Taxi2.displayName = 'Taxi2';
export default Taxi2;
