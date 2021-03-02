import React, { SVGAttributes } from 'react';

export interface UpSmallProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const UpSmall: React.FC<UpSmallProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                d='M13.06 6.44l7.5 7.5-2.12 2.12L12 9.622l-6.44 6.44-2.12-2.122 7.5-7.5a1.5 1.5 0 012.12 0z'
                clipRule='evenodd'
            />
        </svg>
    );
};

UpSmall.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

UpSmall.displayName = 'UpSmall';
export default UpSmall;
