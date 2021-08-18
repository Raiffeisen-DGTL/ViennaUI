import React, { SVGAttributes } from 'react';

export interface Bicycle1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Bicycle1: React.FC<Bicycle1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M17 6h-3v2h2.465l.793 1.19A8.013 8.013 0 0012 13.124 7.998 7.998 0 005 9H3v2h2c1.296 0 2.496.41 3.477 1.11l-1.445 1.444a4 4 0 101.414 1.414l1.445-1.444A5.972 5.972 0 0111 17a1 1 0 102 0c0-1.296.41-2.496 1.11-3.476l1.444 1.444a4 4 0 101.414-1.414l-1.445-1.445A5.972 5.972 0 0119 11a1 1 0 00.832-1.555l-2-3A1 1 0 0017 6zM5 15a2 2 0 100 4 2 2 0 000-4zm14 0a2 2 0 100 4 2 2 0 000-4z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Bicycle1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Bicycle1.displayName = 'Bicycle1';
export default Bicycle1;
