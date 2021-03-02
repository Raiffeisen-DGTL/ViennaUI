import React, { SVGAttributes } from 'react';

export interface StringProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const String: React.FC<StringProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M3.099 2.567A1 1 0 014 2h14a1 1 0 01.78 1.625L16.08 7H18a3 3 0 013 3v3h-2v-3a1.001 1.001 0 00-1-1H5V7h.92l-2.7-3.375a1 1 0 01-.121-1.058zM15.919 4l-2.4 3H8.481l-2.4-3h9.838z'
                clipRule='evenodd'
            />
            <path d='M17 13H5v-2h12v2z' />
            <path
                fillRule='evenodd'
                d='M5.92 17H5v-2h12v2h-.92l2.7 3.375A1 1 0 0118 22H4a1 1 0 01-.78-1.625L5.92 17zm2.56 0l-2.4 3h9.84l-2.4-3H8.48z'
                clipRule='evenodd'
            />
        </svg>
    );
};

String.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

String.displayName = 'String';
export default String;
