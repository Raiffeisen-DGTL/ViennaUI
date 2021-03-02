import React, { SVGAttributes } from 'react';

export interface SealStampProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const SealStamp: React.FC<SealStampProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M16 6.5a3.988 3.988 0 01-1 2.646V11.5a1 1 0 001 1h1a3 3 0 013 3v3H4v-3a3 3 0 013-3h1a1 1 0 001-1V9.146A4 4 0 1116 6.5zm-6 0a2 2 0 113.333 1.491.998.998 0 00-.333.753V11.5a3 3 0 003 3h1a1 1 0 011 1v1H6v-1a1 1 0 011-1h1a3 3 0 003-3V8.75a.998.998 0 00-.333-.759A1.992 1.992 0 0110 6.5z'
                clipRule='evenodd'
            />
            <path d='M4 20.5v2h16v-2H4z' />
        </svg>
    );
};

SealStamp.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

SealStamp.displayName = 'SealStamp';
export default SealStamp;
