import React, { SVGAttributes } from 'react';

export interface PadVertProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const PadVert: React.FC<PadVertProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 18.5a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z' />
            <path
                fillRule='evenodd'
                d='M6 2a3 3 0 00-3 3v14a3 3 0 003 3h12a3 3 0 003-3V5a3 3 0 00-3-3H6zM5 5a1 1 0 011-1h12a1 1 0 011 1v14a1 1 0 01-1 1H6a1 1 0 01-1-1V5z'
                clipRule='evenodd'
            />
        </svg>
    );
};

PadVert.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

PadVert.displayName = 'PadVert';
export default PadVert;
