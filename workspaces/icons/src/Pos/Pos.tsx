import React, { SVGAttributes } from 'react';

export interface PosProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Pos: React.FC<PosProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M2 5a3 3 0 013-3h14a3 3 0 013 3v10a3 3 0 01-3 3h-8v-2h8a1 1 0 001-1V8H4v3H2V5zm2 1h16V5a1 1 0 00-1-1H5a1 1 0 00-1 1v1z'
                clipRule='evenodd'
            />
            <path d='M5.199 12.714A5.979 5.979 0 016.999 17c0 1.68-.687 3.196-1.8 4.286l1.4 1.428A7.979 7.979 0 008.999 17a7.98 7.98 0 00-2.4-5.714l-1.4 1.428zM3 17c0-.592-.256-1.123-.667-1.49l1.334-1.491A3.993 3.993 0 015 17a3.99 3.99 0 01-1.333 2.981l-1.334-1.49c.41-.368.667-.899.667-1.49z' />
        </svg>
    );
};

Pos.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Pos.displayName = 'Pos';
export default Pos;
