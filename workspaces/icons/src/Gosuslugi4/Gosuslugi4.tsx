import React, { SVGAttributes } from 'react';

export interface Gosuslugi4Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Gosuslugi4: React.FC<Gosuslugi4Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M12 1a1 1 0 00-1 1v6.072A7 7 0 005.292 13H4v2h1v3.531l-2.217.493A1 1 0 002 20v3h2v-2.198l8-1.778 8 1.778V23h2v-3a1 1 0 00-.783-.976L19 18.53V15h1v-2h-1.292A6.999 6.999 0 0013 8.072V7h4a1 1 0 001-1V2a1 1 0 00-1-1h-5zm5 17.087V15h-2v2.642l2 .445zm-4-.89V15h-2v2.198l.783-.174a.993.993 0 01.434 0l.783.174zm-4 .445l-2 .445V15h2v2.642zm6.536-6.178c.446.447.799.969 1.047 1.536H7.417a4.998 4.998 0 018.119-1.536zM16 5h-3V3h3v2z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Gosuslugi4.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Gosuslugi4.displayName = 'Gosuslugi4';
export default Gosuslugi4;
