import React, { SVGAttributes } from 'react';

export interface Cosmetics2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Cosmetics2: React.FC<Cosmetics2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M4.447 2.106A1 1 0 003 3v9a1 1 0 00-1 1v8a1 1 0 001 1h6a1 1 0 001-1v-8a1 1 0 00-1-1V5a1 1 0 00-.553-.894l-4-2zM7 12v-2H5v2h2zm-3 2v6h4v-6H4zm1-6V4.618l2 1V8H5zm6.268-5.681A1 1 0 0112 2h9a1 1 0 01.997 1.071l-1 14A1 1 0 0120 18v3a1 1 0 01-1 1h-5a1 1 0 01-1-1v-3a1 1 0 01-.998-.929l-1-14a1 1 0 01.266-.752zM15 18h3v2h-3v-2zm4.069-2H13.93l-.857-12h6.852l-.857 12z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Cosmetics2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Cosmetics2.displayName = 'Cosmetics2';
export default Cosmetics2;
