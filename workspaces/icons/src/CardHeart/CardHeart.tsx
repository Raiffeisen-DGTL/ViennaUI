import React, { SVGAttributes } from 'react';

export interface CardHeartProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CardHeart: React.FC<CardHeartProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M22 18.018A1.983 1.983 0 0120.018 20H3.982A1.983 1.983 0 012 18.018V5.982C2 4.888 2.888 4.001 3.982 4h16.036c1.094 0 1.981.888 1.982 1.982v12.036zm-18 0l16-.002V6H4v12.018zM14.5 8.7c-.484 0-.948.196-1.284.544L12 10.487l-1.216-1.243A1.783 1.783 0 009.5 8.7a1.8 1.8 0 00-1.8 1.8c0 1.6 2.57 3.553 4.295 4.564 1.956-1.152 4.305-3.111 4.305-4.564a1.8 1.8 0 00-1.8-1.8zm0-1.7a3.5 3.5 0 013.5 3.5c0 3.479-6 6.5-6 6.5s-6-2.958-6-6.5a3.5 3.5 0 016-2.444A3.484 3.484 0 0114.5 7z' />
        </svg>
    );
};

CardHeart.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CardHeart.displayName = 'CardHeart';
export default CardHeart;
