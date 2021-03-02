import React, { SVGAttributes } from 'react';

export interface CinemaProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Cinema: React.FC<CinemaProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M14 16a2 2 0 11-4 0 2 2 0 014 0zm-2-6a2 2 0 100-4 2 2 0 000 4zm-4 4a2 2 0 110-4 2 2 0 010 4zm6-2a2 2 0 104 0 2 2 0 00-4 0z' />
            <path
                fillRule='evenodd'
                d='M18.001 20A9.985 9.985 0 0022 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10h9v-2h-2.999zM12 4a8 8 0 100 16 8 8 0 000-16z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Cinema.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Cinema.displayName = 'Cinema';
export default Cinema;
