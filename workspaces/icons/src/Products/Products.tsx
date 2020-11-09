import React, { SVGAttributes } from 'react';

export interface ProductsProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Products: React.FC<ProductsProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M18.2 19l1.55-7h2.05l-1.487 6.7a2.955 2.955 0 01-2.868 2.3H6.555a2.956 2.956 0 01-2.866-2.3L2.2 12h2.047L5.8 19h12.4zM2 9h20v2H2V9zm8.414-6l-5 5H2.586l5-5h2.828zm11 5h-2.828l-5-5h2.828l5 5zM8 12h2v5H8v-5zm3 0h2v5h-2v-5zm3 0h2v5h-2v-5z' />
        </svg>
    );
};

Products.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Products.displayName = 'Products';
export default Products;
