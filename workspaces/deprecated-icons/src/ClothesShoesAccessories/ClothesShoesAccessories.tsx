import React, { SVGAttributes } from 'react';

export interface ClothesShoesAccessoriesProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ClothesShoesAccessories: React.FC<ClothesShoesAccessoriesProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M2 18.001h20v2H2v-2zm11-4.966c3.17.16 6.256 1.076 9 2.672V17h-1.792a17.843 17.843 0 00-16.416 0H2v-1.293a19.881 19.881 0 019-2.672v-2.916a7.31 7.31 0 001.734-.259A2 2 0 1010 8H8a3.993 3.993 0 115 3.859v1.176z' />
        </svg>
    );
};

ClothesShoesAccessories.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ClothesShoesAccessories.displayName = 'ClothesShoesAccessories';
export default ClothesShoesAccessories;
