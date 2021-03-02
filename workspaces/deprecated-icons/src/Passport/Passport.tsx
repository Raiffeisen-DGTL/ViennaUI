import React, { SVGAttributes } from 'react';

export interface PassportProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Passport: React.FC<PassportProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M6.5 4a.5.5 0 000 1H20v15a2 2 0 01-2 2H4V4.5A2.5 2.5 0 016.5 2H20v2H6.5zm0 3a2.5 2.5 0 01-.5-.052V20h12V7H6.5zm3.49 10A1.99 1.99 0 018 15.01V9h8v6.009A1.99 1.99 0 0114.01 17h-.649L12 18l-1.357-1H9.99zm.01-6v4.009l.764-.009h3.243L14 11h-4z' />
        </svg>
    );
};

Passport.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Passport.displayName = 'Passport';
export default Passport;
