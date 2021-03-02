import React, { SVGAttributes } from 'react';

export interface BabyClothesProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const BabyClothes: React.FC<BabyClothesProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M15.924 2l-.262.6A4 4 0 0114 4.453v2.192A5.993 5.993 0 0017.191 4H20v4h-3v6H7V8H4V4h2.809A6 6 0 0011 6.908V10h2V4.866A3.951 3.951 0 018.338 2.6L8.076 2H4a2 2 0 00-2 2v4a2 2 0 002 2h1v10a2 2 0 002 2h10a2 2 0 002-2V10h1a2 2 0 002-2V4a2 2 0 00-2-2h-4.076zM17 20h-4v-2h-2v2H7v-4h10v4z' />
        </svg>
    );
};

BabyClothes.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

BabyClothes.displayName = 'BabyClothes';
export default BabyClothes;
