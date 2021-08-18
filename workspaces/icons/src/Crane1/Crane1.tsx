import React, { SVGAttributes } from 'react';

export interface Crane1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Crane1: React.FC<Crane1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M3 3v2h3.465l1.333 2H3v2h18V7a1 1 0 00-.168-.555l-2-3A1 1 0 0018 3H3zm10.132 2H8.869l.963 1.445A1 1 0 0110 7h2a1 1 0 01.168-.555L13.132 5zm2.403 0l-1.333 2h4.596l-1.333-2h-1.93z'
                clipRule='evenodd'
            />
            <path d='M13 13h-1v-2h4v2h-1v1.536A4 4 0 119 18h2a2 2 0 102-2v-3z' />
        </svg>
    );
};

Crane1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Crane1.displayName = 'Crane1';
export default Crane1;
