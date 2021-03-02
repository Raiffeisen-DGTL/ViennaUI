import React, { SVGAttributes } from 'react';

export interface MoonProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Moon: React.FC<MoonProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M14.179 22c-5.523 0-10-4.477-10-10s4.477-10 10-10c1.25.02 2.482.305 3.613.839.273.133.536.288.784.463 0 0-.669.533-1.029.792A9.946 9.946 0 0013.179 12a9.505 9.505 0 004.421 7.882c.348.223 1 .671 1 .671a5.49 5.49 0 01-1.353.894 7.368 7.368 0 01-3.068.553zm0-18a8 8 0 100 16c.148 0 .3 0 .444-.013a10.983 10.983 0 010-15.974C14.475 4 14.327 4 14.179 4z' />
        </svg>
    );
};

Moon.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Moon.displayName = 'Moon';
export default Moon;
