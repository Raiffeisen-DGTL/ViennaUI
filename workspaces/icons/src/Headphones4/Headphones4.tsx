import React, { SVGAttributes } from 'react';

export interface Headphones4Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Headphones4: React.FC<Headphones4Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M9 6.83V10h2V4a3 3 0 10-2 2.83zM8 3a1 1 0 100 2 1 1 0 000-2z'
                clipRule='evenodd'
            />
            <path d='M12 18a1 1 0 100-2 1 1 0 000 2z' />
            <path
                fillRule='evenodd'
                d='M15 8.83A3 3 0 1013 6v6H7v-2H5v9a3 3 0 003 3h8a3 3 0 003-3v-9h-2v2h-2V8.83zM15 6a1 1 0 112 0 1 1 0 01-2 0zm2 8H7v5a1 1 0 001 1h8a1 1 0 001-1v-5z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Headphones4.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Headphones4.displayName = 'Headphones4';
export default Headphones4;
