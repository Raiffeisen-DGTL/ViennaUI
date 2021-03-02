import React, { SVGAttributes } from 'react';

export interface Crane2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Crane2: React.FC<Crane2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M5 2a1 1 0 00-1 1v2a1 1 0 00.293.707l2 2A1 1 0 007 8h1v3a1 1 0 00.293.707l2 2A1 1 0 0011 14v2h1.003A1.999 1.999 0 1110 18H8a4 4 0 105-3.873V14a1 1 0 00.707-.293l2-2A1 1 0 0016 11V8h1a1 1 0 00.707-.293l2-2A1 1 0 0020 5V3a1 1 0 00-1-1H5zm5 8.586V8h4v2.586L12.586 12h-1.172L10 10.586zm-4-6V4h12v.586L16.586 6H7.414L6 4.586z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Crane2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Crane2.displayName = 'Crane2';
export default Crane2;
