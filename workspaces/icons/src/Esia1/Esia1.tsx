import React, { SVGAttributes } from 'react';

export interface Esia1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Esia1: React.FC<Esia1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M13.625 1.628a4 4 0 00-3.25 0l-6 2.666A4 4 0 002 7.95v8.1a4 4 0 002.375 3.656l6 2.666a4 4 0 003.25 0l6-2.666A4 4 0 0022 16.05v-8.1a4 4 0 00-2.375-3.656l-6-2.666zm-2.437 1.827a2 2 0 011.624 0l6 2.667A2 2 0 0119.76 7H14v2h6v2h-6v2h6v2h-6v2h5.76a2 2 0 01-.948.878l-6 2.667a2 2 0 01-.812.172V16a3 3 0 00-3-3 3 3 0 100-6 3 3 0 000 6 3 3 0 00-3 3v2.239l-.812-.361A2 2 0 014 16.05v-8.1a2 2 0 011.188-1.828l6-2.667zM10 20.017V16a1 1 0 10-2 0v3.128l2 .889zM9 9a1 1 0 100 2 1 1 0 000-2z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Esia1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Esia1.displayName = 'Esia1';
export default Esia1;
