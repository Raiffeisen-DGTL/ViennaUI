import React, { SVGAttributes } from 'react';

export interface Binoculars1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Binoculars1: React.FC<Binoculars1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M5 3a1 1 0 011-1h4a1 1 0 011 1v2h2V3a1 1 0 011-1h4a1 1 0 011 1v2h1a1 1 0 01.991.868l2 15A1 1 0 0122 22h-8a1 1 0 01-.996-1.09l.901-9.91h-3.81l.9 9.91A1 1 0 0110 22H2a1 1 0 01-.991-1.132l2-15A1 1 0 014 5h1V3zm2 1v2a1 1 0 01-1 1H4.876l-1.2 9H8.54l-.537-5.91A1 1 0 019 9h6a1 1 0 01.996 1.09L15.459 16h4.866l-1.2-9H18a1 1 0 01-1-1V4h-2v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V4H7zm13.591 14h-5.314l-.182 2h5.763l-.267-2zM8.723 18H3.41l-.267 2h5.763l-.182-2z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Binoculars1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Binoculars1.displayName = 'Binoculars1';
export default Binoculars1;
