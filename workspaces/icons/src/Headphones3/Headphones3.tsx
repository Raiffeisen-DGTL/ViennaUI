import React, { SVGAttributes } from 'react';

export interface Headphones3Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Headphones3: React.FC<Headphones3Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M3.096 6.025A5 5 0 007 11.899V19a1 1 0 001 1h3v1a1 1 0 001 1h4a1 1 0 001-1v-7.101a4.999 4.999 0 002.535-8.435 5 5 0 00-6.849-.208 4.997 4.997 0 00-2.773-2.875 5 5 0 00-6.817 3.644zM11 8.995V18H9V8H7v1.828A3 3 0 1111 7v1.996zM13 19V8.997a3 3 0 114 2.831V10h-2v10h-2v-1z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Headphones3.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Headphones3.displayName = 'Headphones3';
export default Headphones3;
