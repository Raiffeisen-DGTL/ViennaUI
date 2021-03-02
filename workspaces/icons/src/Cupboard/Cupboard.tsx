import React, { SVGAttributes } from 'react';

export interface CupboardProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Cupboard: React.FC<CupboardProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M7 12V9h2v3H7zm8-3v3h2V9h-2z' />
            <path
                fillRule='evenodd'
                d='M3 3a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1h-1v2h-2v-2H7v2H5v-2H4a1 1 0 01-1-1V3zm2 13v2h6v-2H5zm0-2h6V4H5v10zm8 2v2h6v-2h-6zm6-12h-6v10h6V4z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Cupboard.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Cupboard.displayName = 'Cupboard';
export default Cupboard;
