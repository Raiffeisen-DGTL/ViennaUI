import React, { SVGAttributes } from 'react';

export interface BicycleProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Bicycle: React.FC<BicycleProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M6.041 14.659a2.317 2.317 0 100 4.634 2.317 2.317 0 000-4.634zm0-1.7a4.017 4.017 0 014.018 4.018 4.018 4.018 0 11-4.018-4.018zM18 14.694a2.3 2.3 0 100 4.6 2.3 2.3 0 000-4.6zm0-1.7a4 4 0 110 8 4 4 0 010-8zm-1.894-1.441l-3.98-3.442-1.5 2.561 3.748 2.121-1.749 5.867-1.917-.57L12 13.748l-2.263-1.281a2.107 2.107 0 01-.78-2.9L11.2 5.74h1.341l4.712 4.506-1.147 1.307zM13.562 5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z' />
        </svg>
    );
};

Bicycle.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Bicycle.displayName = 'Bicycle';
export default Bicycle;
