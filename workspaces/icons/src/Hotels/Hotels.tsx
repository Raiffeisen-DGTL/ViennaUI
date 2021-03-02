import React, { SVGAttributes } from 'react';

export interface HotelsProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Hotels: React.FC<HotelsProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M3 2h2v2H3V2zm4 0h2v2H7V2zm6 0h-2v2h2V2zm2 0h2v2h-2V2zm6 0h-2v2h2V2zM8 16h8v-2H8v2zm8-4H8v-2h8v2z' />
            <path
                fillRule='evenodd'
                d='M4 7a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V7zm2 1v12h4v-2h4v2h4V8H6z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Hotels.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Hotels.displayName = 'Hotels';
export default Hotels;
