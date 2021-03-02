import React, { SVGAttributes } from 'react';

export interface UFOProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const UFO: React.FC<UFOProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 7a5.009 5.009 0 00-4.9 4H5.08A7.007 7.007 0 0111 5.079V2h2v3.079A7.007 7.007 0 0118.92 11H16.9A5.009 5.009 0 0012 7zm10 5v2.413l-2.6 2.6 2.55 2.548-1.414 1.414L17.561 18H13v4h-2v-4H6.389l-2.975 2.975L2 19.561l2.573-2.574L2 14.414V12h20zm-4.414 4l2-2H4.414l2 2h11.172zm-7.308-5H8.142a3.994 3.994 0 013.816-3v2a1.994 1.994 0 00-1.68 1z' />
        </svg>
    );
};

UFO.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

UFO.displayName = 'UFO';
export default UFO;
