import React, { SVGAttributes } from 'react';

export interface Pin2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Pin2: React.FC<Pin2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 7.8a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4zM12 6a3 3 0 110 6 3 3 0 010-6zm0-2a5.006 5.006 0 00-5 5c0 3.411 2.9 7.58 4.995 10.04C14.088 16.565 17 12.376 17 9a5.006 5.006 0 00-5-5zm0-2a7 7 0 017 7c0 6.042-7 13-7 13S5 15.084 5 9a7 7 0 017-7z' />
        </svg>
    );
};

Pin2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Pin2.displayName = 'Pin2';
export default Pin2;
