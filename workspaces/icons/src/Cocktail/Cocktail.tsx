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
            <path d='M12 18a1 1 0 11-2 0 1 1 0 012 0zm2-3a1 1 0 11-2 0 1 1 0 012 0z' />
            <path
                fillRule='evenodd'
                d='M8.222 2.343A4.5 4.5 0 106 10.973V19a3 3 0 003 3h6a3 3 0 003-3V6h-2.057l.75-2H21V2h-5a1 1 0 00-.936.649L13.807 6h-2.835a4.499 4.499 0 00-2.75-3.657zM8 8h5.057l-.75 2H8V8zm7.193 0l-.75 2H16V8h-.807zM8.949 6A2.5 2.5 0 106 8.95V6h2.95zM8 19v-7h2a1 1 0 102 0h4v7a1 1 0 01-1 1H9a1 1 0 01-1-1z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Cocktail.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Cocktail.displayName = 'Cocktail';
export default Cocktail;
