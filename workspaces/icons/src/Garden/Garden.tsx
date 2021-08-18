import React, { SVGAttributes } from 'react';

export interface GardenProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Garden: React.FC<GardenProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M11.087 6.066A5.002 5.002 0 0116 2h6v4a5 5 0 01-5 5h-4v9h5v2H6v-2h5v-6H7a5 5 0 01-5-5V5h6c1.165 0 2.237.398 3.087 1.066zM11 10a3 3 0 00-3-3H4v2a3 3 0 003 3h4v-2zm5-6a3 3 0 00-3 3v2h4a3 3 0 003-3V4h-4z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Garden.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Garden.displayName = 'Garden';
export default Garden;
