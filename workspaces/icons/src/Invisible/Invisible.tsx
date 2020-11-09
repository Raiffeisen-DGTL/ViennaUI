import React, { SVGAttributes } from 'react';

export interface InvisibleProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Invisible: React.FC<InvisibleProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M16 12a4 4 0 01-4 4 3.815 3.815 0 01-.54-.055l4.485-4.482c.03.178.049.357.055.537zm3.247-3.84a13.919 13.919 0 012.532 3.393L22 12l-.219.447C21.648 12.715 18.468 19 12 19a9.65 9.65 0 01-3.088-.506l1.633-1.633c.479.091.965.138 1.453.139 4.33 0 6.963-3.7 7.757-5a12.779 12.779 0 00-1.929-2.42l1.421-1.42zM20.586 2H22v1.414L3.414 22H2v-1.414l3.793-3.793a13.522 13.522 0 01-3.584-4.361L2 11.99l.218-.437C2.351 11.285 5.531 5 12 5c1.558 0 3.093.383 4.468 1.117L20.586 2zM4.231 12.014a11.383 11.383 0 002.978 3.365l1.353-1.354A3.922 3.922 0 018 12a4 4 0 014-4c.714 0 1.414.195 2.025.563l.942-.942A7.442 7.442 0 0012 7c-4.348 0-6.984 3.721-7.769 5.014zm5.85.492l2.424-2.423A1.919 1.919 0 0012 10a2 2 0 00-2 2c.004.172.032.342.081.506z' />
        </svg>
    );
};

Invisible.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Invisible.displayName = 'Invisible';
export default Invisible;
