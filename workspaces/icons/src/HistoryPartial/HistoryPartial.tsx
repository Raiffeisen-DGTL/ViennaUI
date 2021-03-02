import React, { SVGAttributes } from 'react';

export interface HistoryPartialProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const HistoryPartial: React.FC<HistoryPartialProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M10.695 2.086A10 10 0 0112 2h.015a10.001 10.001 0 017.056 17.071 10.006 10.006 0 01-8.376 2.843l.26-1.982a8.006 8.006 0 006.702-2.275 8 8 0 00-6.701-13.589l-.261-1.982zm-2.522.675a10 10 0 00-2.26 1.305L7.13 5.653A7.998 7.998 0 018.939 4.61l-.766-1.848zM3.34 7a10 10 0 01.726-1.088L5.653 7.13A7.998 7.998 0 004.61 8.939l-1.848-.766c.167-.402.36-.794.579-1.173zm-1.254 3.695a10 10 0 000 2.61l1.982-.26a8 8 0 010-2.09l-1.982-.26zM3.34 17a9.997 9.997 0 01-.579-1.173l1.848-.765a8.005 8.005 0 001.044 1.808l-1.587 1.218A10.004 10.004 0 013.34 17zm2.572 2.933a10.004 10.004 0 002.261 1.306l.766-1.848a7.995 7.995 0 01-1.81-1.044l-1.217 1.586z' />
            <path d='M11 12V7h2v4.586l3.207 3.207-1.414 1.414-3.5-3.5A1 1 0 0111 12z' />
        </svg>
    );
};

HistoryPartial.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

HistoryPartial.displayName = 'HistoryPartial';
export default HistoryPartial;
