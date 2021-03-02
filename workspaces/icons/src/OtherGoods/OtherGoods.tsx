import React, { SVGAttributes } from 'react';

export interface OtherGoodsProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const OtherGoods: React.FC<OtherGoodsProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M14.5 1A3.5 3.5 0 0011 4.5V5H9.5A3.5 3.5 0 006 8.5V9H4a2 2 0 00-2 2v9a2 2 0 002 2h11a2 2 0 002-2v-1h3a2 2 0 002-2V7a2 2 0 00-2-2h-2v-.5A3.5 3.5 0 0014.5 1zM8 9v-.5a1.5 1.5 0 013 0V9H8zm3 2v2h2v-2h2v9H4v-9h2v2h2v-2h3zm2-2v-.5a3.5 3.5 0 00-.338-1.5H20v10h-3v-6a2 2 0 00-2-2h-2zm3-4v-.5a1.5 1.5 0 10-3 0V5h3z'
                clipRule='evenodd'
            />
        </svg>
    );
};

OtherGoods.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

OtherGoods.displayName = 'OtherGoods';
export default OtherGoods;
