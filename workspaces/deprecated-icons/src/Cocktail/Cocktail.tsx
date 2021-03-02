import React, { SVGAttributes } from 'react';

export interface CocktailProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Cocktail: React.FC<CocktailProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M7 20V7h11v13a2 2 0 01-2 2H9a2 2 0 01-2-2zM9 9v11h7V9H9zm8-7h4v2h-2.69l-1 2H15l2-4zm-7 8h2v9h-2v-9zM4.8 6.5A2.7 2.7 0 006 8.74v2A4.5 4.5 0 1112 6h-1.85a2.7 2.7 0 00-5.35.5z' />
        </svg>
    );
};

Cocktail.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Cocktail.displayName = 'Cocktail';
export default Cocktail;
