import React, { SVGAttributes } from 'react';

export interface Purse2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Purse2: React.FC<Purse2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M15.692 23H8.308A5.818 5.818 0 012.7 15.651L4.236 10h15.528l1.541 5.651A5.818 5.818 0 0115.692 23zM5.764 12l-1.139 4.177A3.818 3.818 0 008.308 21h7.384a3.818 3.818 0 003.683-4.823L18.236 12H5.764zm8.965-5H20v2h-6.224L8.962 4.132l1.414-1.414L14.729 7zM4 8V7h5.708l2.229 2H4V8zm10.173-2.634l-1.42-1.42 1.409-1.384 1.414 1.414-1.403 1.39z' />
        </svg>
    );
};

Purse2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Purse2.displayName = 'Purse2';
export default Purse2;
