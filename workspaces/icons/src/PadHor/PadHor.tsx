import React, { SVGAttributes } from 'react';

export interface PadHorProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const PadHor: React.FC<PadHorProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M18.5 12a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0z' />
            <path
                fillRule='evenodd'
                d='M2 18a3 3 0 003 3h14a3 3 0 003-3V6a3 3 0 00-3-3H5a3 3 0 00-3 3v12zm3 1a1 1 0 01-1-1V6a1 1 0 011-1h14a1 1 0 011 1v12a1 1 0 01-1 1H5z'
                clipRule='evenodd'
            />
        </svg>
    );
};

PadHor.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

PadHor.displayName = 'PadHor';
export default PadHor;
