import React, { SVGAttributes } from 'react';

export interface CookProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Cook: React.FC<CookProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M12 3a5 5 0 00-4.065 2.088 4.997 4.997 0 00-4.694 1.615A5 5 0 005 14.583V20a1 1 0 001 1h12a1 1 0 001-1v-5.417a5 5 0 00-2.935-9.494A4.996 4.996 0 0012 3zm4.9 4.002c.066.326.1.66.1.998h-2a3 3 0 00-6 0H7c0-.338.034-.672.1-.998A3 3 0 106.999 13H7v6h10v-6h.002a3 3 0 10-.103-5.998z'
                clipRule='evenodd'
            />
            <path fillRule='evenodd' d='M9 16v-3h2v3H9zm4 0v-3h2v3h-2z' clipRule='evenodd' />
        </svg>
    );
};

Cook.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Cook.displayName = 'Cook';
export default Cook;
