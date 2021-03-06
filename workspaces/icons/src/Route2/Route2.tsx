import React, { SVGAttributes } from 'react';

export interface Route2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Route2: React.FC<Route2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M11.293 1.293a1 1 0 011.023-.242l6 2a1 1 0 01.391 1.656L17.414 6l2.793 2.793a4.535 4.535 0 11-6.414 6.414l-4.75-4.75a2.89 2.89 0 00-4.086 4.086l2.75 2.75a3 3 0 11-1.414 1.414l-2.75-2.75a4.89 4.89 0 016.914-6.914l4.75 4.75a2.536 2.536 0 103.586-3.586L16 7.414l-1.293 1.293a1 1 0 01-1.656-.39l-2-6a1 1 0 01.242-1.024zM13.58 3.58l.856 2.568 1.712-1.712-2.568-.856zM9 19a1 1 0 100 2 1 1 0 000-2z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Route2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Route2.displayName = 'Route2';
export default Route2;
