import React, { SVGAttributes } from 'react';

export interface Route1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Route1: React.FC<Route1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M18 12h-2.764a3 3 0 00-2.683 1.658c-.998 1.995.453 4.342 2.683 4.342h1.936c.89 0 1.337 1.077.707 1.707a1 1 0 01-.707.293H5v2h12.172a3 3 0 002.12-.879c1.89-1.89.552-5.121-2.12-5.121h-1.936a1 1 0 110-2H18v-2zM6 14a1 1 0 100-2 1 1 0 000 2z' />
            <path
                fillRule='evenodd'
                d='M5.4 19.8a1 1 0 001.2 0l.002-.002.004-.003.012-.009.04-.03.142-.113a15.911 15.911 0 001.956-1.895C9.792 16.55 11 14.752 11 12.75 11 10.067 8.7 8 6 8s-5 2.067-5 4.75c0 2.002 1.208 3.8 2.244 4.998a15.911 15.911 0 002.097 2.007l.04.031.013.01.004.002.001.001.001.001zM6 10c1.719 0 3 1.291 3 2.75 0 1.248-.792 2.575-1.756 3.69A13.91 13.91 0 016 17.698c-.347-.31-.796-.741-1.244-1.258C3.792 15.325 3 13.998 3 12.75 3 11.291 4.281 10 6 10zm11.373 1.78h.002a1 1 0 001.25 0h.002l.003-.003.01-.008.032-.027a8.758 8.758 0 00.483-.43c.305-.288.712-.702 1.122-1.207C21.065 9.132 22 7.655 22 6a4 4 0 00-8 0c0 1.654.935 3.132 1.723 4.105a12.599 12.599 0 001.605 1.637l.032.027.01.008.003.002zM18 4a2 2 0 012 2c0 .946-.565 1.968-1.277 2.845-.251.31-.504.582-.723.8-.219-.218-.472-.49-.723-.8C16.565 7.968 16 6.945 16 6a2 2 0 012-2z'
                clipRule='evenodd'
            />
            <path fillRule='evenodd' d='M7 13a1 1 0 11-2 0 1 1 0 012 0z' clipRule='evenodd' />
        </svg>
    );
};

Route1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Route1.displayName = 'Route1';
export default Route1;
