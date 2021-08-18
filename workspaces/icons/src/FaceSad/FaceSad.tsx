import React, { SVGAttributes } from 'react';

export interface FaceSadProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const FaceSad: React.FC<FaceSadProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M10 10.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.5 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM12 16a3.987 3.987 0 00-2.94 1.287L7.59 15.93A5.987 5.987 0 0112 14c1.743 0 3.313.745 4.408 1.93l-1.469 1.357A3.987 3.987 0 0011.999 16z' />
            <path
                fillRule='evenodd'
                d='M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm10-8a8 8 0 100 16 8 8 0 000-16z'
                clipRule='evenodd'
            />
        </svg>
    );
};

FaceSad.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

FaceSad.displayName = 'FaceSad';
export default FaceSad;
