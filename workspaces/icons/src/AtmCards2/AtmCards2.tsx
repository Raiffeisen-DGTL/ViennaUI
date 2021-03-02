import React, { SVGAttributes } from 'react';

export interface AtmCards2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const AtmCards2: React.FC<AtmCards2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M4 22H2V2h2v20zM19 6H6V4h13a3 3 0 013 3v10a3 3 0 01-3 3H6v-2h13a1 1 0 001-1V7a1 1 0 00-1-1z' />
            <path d='M8 8h12v2H8V8z' />
        </svg>
    );
};

AtmCards2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

AtmCards2.displayName = 'AtmCards2';
export default AtmCards2;
