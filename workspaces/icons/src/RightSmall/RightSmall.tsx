import React, { SVGAttributes } from 'react';

export interface RightSmallProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const RightSmall: React.FC<RightSmallProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                d='M17.56 13.06l-7.5 7.5-2.12-2.12L14.378 12l-6.44-6.44 2.122-2.12 7.5 7.5a1.5 1.5 0 010 2.12z'
                clipRule='evenodd'
            />
        </svg>
    );
};

RightSmall.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

RightSmall.displayName = 'RightSmall';
export default RightSmall;
