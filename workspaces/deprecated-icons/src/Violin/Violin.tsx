import React, { SVGAttributes } from 'react';

export interface ViolinProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Violin: React.FC<ViolinProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M22.74 2.643l-1.5-1.5-.7.7-.648-.648L18.479 2.6l.649.647-2.6 2.6a4.355 4.355 0 00-6.127.022L7.962 8.308l1.415 1.414-1.127 1.127L6.408 9l-3.027 3.031a5.125 5.125 0 000 7.24l1.292 1.292a5.124 5.124 0 007.239 0l3.028-3.027-1.878-1.878 1.126-1.127 1.412 1.414 2.439-2.439a4.358 4.358 0 000-6.155l2.591-2.598.648.648 1.415-1.414-.649-.648.696-.696zm-5.972 5.982a2.55 2.55 0 010 3.607L15.6 13.4l-.17-.17a1.761 1.761 0 00-2.489 0l-1.185 1.185a1.761 1.761 0 000 2.489l.634.634-1.751 1.752a3.313 3.313 0 01-4.612.066L8.9 16.479l-1.5-1.5-2.87 2.87a3.309 3.309 0 01.123-4.542l1.754-1.754.6.6a1.761 1.761 0 002.489 0l1.185-1.185a1.759 1.759 0 000-2.488l-.17-.17 1.165-1.165a2.549 2.549 0 013.581-.023l-2.189 2.189 1.5 1.5 2.192-2.192.008.006z' />
        </svg>
    );
};

Violin.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Violin.displayName = 'Violin';
export default Violin;
