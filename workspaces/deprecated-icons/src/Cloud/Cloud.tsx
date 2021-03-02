import React, { SVGAttributes } from 'react';

export interface CloudProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Cloud: React.FC<CloudProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12.417 7.551v.001a3.8 3.8 0 00-3.663 2.806l-.433 1.38a11.59 11.59 0 00-1.821-.186 2.8 2.8 0 100 5.6h11.503a2.3 2.3 0 002.3-2.3 2.331 2.331 0 00-2.223-2.3c-.787-.051-1.662-.077-1.662-.077S16.335 11.4 16.3 11a3.907 3.907 0 00-3.883-3.449zm0-1.699a5.5 5.5 0 015.475 5.011c.037-.001.071-.011.108-.011a4 4 0 110 8H6.504a4.5 4.5 0 010-9c.206.006.41.027.613.062a5.5 5.5 0 015.3-4.062zm-.01 7.288l.001.001a2.638 2.638 0 00-3.386 2.761l-1.693-.179a4.3 4.3 0 01.165-1.3 4.353 4.353 0 015.421-2.906c.032.009.06.025.092.036l-.6 1.587z' />
        </svg>
    );
};

Cloud.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Cloud.displayName = 'Cloud';
export default Cloud;
