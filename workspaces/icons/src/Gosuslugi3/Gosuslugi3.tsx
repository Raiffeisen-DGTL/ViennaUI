import React, { SVGAttributes } from 'react';

export interface Gosuslugi3Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Gosuslugi3: React.FC<Gosuslugi3Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M11 1a1 1 0 011-1h3v2h-2v2.05A10 10 0 0121.95 13H24v2h-1v4h1v2H0v-2h1v-4H0v-2h2.05A10 10 0 0111 4.05V1zm7 14h3v4h-3v-4zm-2 0h-3v4h3v-4zm-8 0h3v4H8v-4zm-2 0H3v4h3v-4zm13.937-2a8 8 0 00-15.874 0h15.874z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Gosuslugi3.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Gosuslugi3.displayName = 'Gosuslugi3';
export default Gosuslugi3;
