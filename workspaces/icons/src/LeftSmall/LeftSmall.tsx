import React, { SVGAttributes } from 'react';

export interface LeftSmallProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const LeftSmall: React.FC<LeftSmallProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                d='M6.44 10.94l7.5-7.5 2.12 2.12L9.622 12l6.44 6.44-2.122 2.12-7.5-7.5a1.5 1.5 0 010-2.12z'
                clipRule='evenodd'
            />
        </svg>
    );
};

LeftSmall.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

LeftSmall.displayName = 'LeftSmall';
export default LeftSmall;
