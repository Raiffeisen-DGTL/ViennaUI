import React, { SVGAttributes } from 'react';

export interface AtmProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Atm: React.FC<AtmProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M8 6a1 1 0 00-1 1v4a1 1 0 001 1h8a1 1 0 001-1V7a1 1 0 00-1-1H8zm1 4V8h6v2H9z'
                clipRule='evenodd'
            />
            <path
                fillRule='evenodd'
                d='M20 20a1 1 0 001-1V3a1 1 0 00-1-1H4a1 1 0 00-1 1v16a1 1 0 001 1h4v1a1 1 0 001 1h6a1 1 0 001-1v-1h4zm-4-2h3V4H5v14h3v-2H7v-2h10v2h-1v2zm-6 2v-4h4v4h-4z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Atm.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Atm.displayName = 'Atm';
export default Atm;
