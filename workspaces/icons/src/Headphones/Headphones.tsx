import React, { SVGAttributes } from 'react';

export interface HeadphonesProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Headphones: React.FC<HeadphonesProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M21 13.2V11a9 9 0 10-18 0v2.2a3.056 3.056 0 00-2 2.862v1.874A3.062 3.062 0 004.062 21H8v-7H6v5H4.062A1.063 1.063 0 013 17.935v-1.874A1.063 1.063 0 014.062 15H5v-4a7 7 0 0114 0v4h.937c.586 0 1.061.475 1.063 1.061v1.874A1.064 1.064 0 0119.937 19H18v-5h-2v7h3.937A3.062 3.062 0 0023 17.935v-1.874a3.056 3.056 0 00-2-2.861z' />
        </svg>
    );
};

Headphones.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Headphones.displayName = 'Headphones';
export default Headphones;
