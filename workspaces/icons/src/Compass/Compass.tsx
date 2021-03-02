import React, { SVGAttributes } from 'react';

export interface CompassProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Compass: React.FC<CompassProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M9 1v5h2V4l2 2h2V1h-2v2l-2-2H9z' />
            <path d='M16.584 5.444A8 8 0 0119.937 11H18v2h1.937A7.998 7.998 0 0113 19.937V18h-2v1.937A8 8 0 014.063 13H6v-2H4.063a8 8 0 013.33-5.54L6.241 3.824a10 10 0 1011.49-.02l-1.147 1.64z' />
            <path
                fillRule='evenodd'
                d='M16.88 8.474a1 1 0 00-1.354-1.354l-5.2 2.8a1 1 0 00-.406.406l-2.8 5.2a1 1 0 001.354 1.355l5.2-2.8a1 1 0 00.407-.407l2.8-5.2zm-6.42 5.065l1.078-2 2.001-1.078-1.077 2-2.001 1.078z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Compass.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Compass.displayName = 'Compass';
export default Compass;
