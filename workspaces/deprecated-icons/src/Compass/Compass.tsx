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
            <path d='M12 3.935a8.116 8.116 0 00-8.106 8.107A8.107 8.107 0 1012 3.935zm0-1.893c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10zM16.83 6.5l.668.671-3.227 7.1-7.08 3.217-.679-.68L9.73 9.727l7.1-3.227zm-3.919 6.409L14.43 9.57l-3.341 1.519L9.57 14.43l3.341-1.521z' />
        </svg>
    );
};

Compass.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Compass.displayName = 'Compass';
export default Compass;
