import React, { SVGAttributes } from 'react';

export interface AnkerProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Anker: React.FC<AnkerProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M8 6a4 4 0 115 3.874v10.064A8.004 8.004 0 0019.938 13H18v-2h3a1 1 0 011 1c0 5.523-4.477 10-10 10S2 17.523 2 12a1 1 0 011-1h3v2H4.062A8.004 8.004 0 0011 19.938V9.874A4.002 4.002 0 018 6zm4-2a2 2 0 100 4 2 2 0 000-4z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Anker.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Anker.displayName = 'Anker';
export default Anker;
