import React, { SVGAttributes } from 'react';

export interface Scheme1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Scheme1: React.FC<Scheme1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M7 3a1 1 0 00-1 1v8a1 1 0 001 1h4v4H9v-1a1 1 0 00-1-1H4a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1v-1h6v1a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 00-1-1h-4a1 1 0 00-1 1v1h-2v-4h4a1 1 0 001-1V4a1 1 0 00-1-1H7zm1 8V5h8v6H8zm-3 8v-2h2v2H5zm12-2v2h2v-2h-2z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Scheme1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Scheme1.displayName = 'Scheme1';
export default Scheme1;
