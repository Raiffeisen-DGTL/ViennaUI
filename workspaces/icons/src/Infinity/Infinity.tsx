import React, { SVGAttributes } from 'react';

export interface InfinityProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Infinity: React.FC<InfinityProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M7 9a3 3 0 100 6c.436 0 .882-.16 1.358-.44.387-.229.727-.493 1.079-.766.095-.075.192-.15.29-.224l1.213 1.59-.23.177c-.357.28-.827.645-1.336.945C8.734 16.66 7.93 17 7 17A5 5 0 017 7c1.997 0 3.5 1.274 4.424 2.347.478.554.843 1.104 1.089 1.512.124.206.622 1.127.688 1.25.205.342.506.792.89 1.239C14.89 14.274 15.886 15 17 15a3 3 0 100-6c-.451 0-.896.16-1.37.444-.388.233-.732.506-1.1.797l-.303.239-1.229-1.578.242-.19c.374-.298.85-.676 1.362-.984C15.252 7.34 16.057 7 17 7a5 5 0 010 10c-1.997 0-3.5-1.274-4.424-2.348a11.168 11.168 0 01-1.089-1.511 57.343 57.343 0 01-.688-1.25 9.18 9.18 0 00-.89-1.239C9.11 9.726 8.114 9 7 9z' />
        </svg>
    );
};

Infinity.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Infinity.displayName = 'Infinity';
export default Infinity;
