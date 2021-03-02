import React, { SVGAttributes } from 'react';

export interface BackpackProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Backpack: React.FC<BackpackProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M8 6.07V4a3 3 0 013-3h2a3 3 0 013 3v2.07A7.997 7.997 0 0120 13v8a1 1 0 01-1 1H5a1 1 0 01-1-1v-8a7.997 7.997 0 014-6.93zM10 4a1 1 0 011-1h2a1 1 0 011 1v1.252A8.014 8.014 0 0012 5c-.69 0-1.36.088-2 .252V4zm-4 9c0-1.005.247-1.953.684-2.785l.911 2.734A3 3 0 0010.441 15H11v2h2v-2h.559a3 3 0 002.845-2.051l.912-2.734c.437.832.684 1.78.684 2.785v7H6v-7zm7 0h.559a1 1 0 00.948-.684l1.314-3.942A5.976 5.976 0 0012 7a5.976 5.976 0 00-3.821 1.374l1.314 3.942a1 1 0 00.948.684H11v-2h2v2z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Backpack.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Backpack.displayName = 'Backpack';
export default Backpack;
