import React, { SVGAttributes } from 'react';

export interface Footwear2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Footwear2: React.FC<Footwear2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M10.754 5.03a1 1 0 01.82.15l9.153 6.409A2.984 2.984 0 0122 14.032 4.967 4.967 0 0117.033 19H3a1 1 0 01-1-1V6a1 1 0 011-1h2.333C6.253 5 7 5.746 7 6.667c0 .184.15.333.333.333h1.43a1 1 0 00.895-.553l.448-.894a1 1 0 01.648-.522zM4 7v10h13.033A2.967 2.967 0 0020 14.033a.984.984 0 00-.42-.806l-1.995-1.397-1.878 1.877-1.414-1.414 1.628-1.628-1.278-.894-1.936 1.936-1.414-1.414 1.687-1.687-1.607-1.125A3 3 0 018.763 9h-1.43a2.334 2.334 0 01-2.31-2H4z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Footwear2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Footwear2.displayName = 'Footwear2';
export default Footwear2;
