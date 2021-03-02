import React, { SVGAttributes } from 'react';

export interface Retry1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Retry1: React.FC<Retry1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M13 4.5a7.5 7.5 0 00-7.476 8.107l1.233-1.577 1.576 1.231-2.612 3.343a1 1 0 01-1.404.173L.974 13.165l1.231-1.576 1.315 1.027a9.5 9.5 0 0116.723-6.763L18.72 7.147A7.481 7.481 0 0013 4.5zm9.48 6.884l1.315 1.027 1.231-1.576-3.343-2.612a1 1 0 00-1.404.173l-2.612 3.343 1.576 1.231 1.233-1.578a7.5 7.5 0 01-13.195 5.46l-1.524 1.295a9.5 9.5 0 0016.723-6.763z' />
        </svg>
    );
};

Retry1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Retry1.displayName = 'Retry1';
export default Retry1;
