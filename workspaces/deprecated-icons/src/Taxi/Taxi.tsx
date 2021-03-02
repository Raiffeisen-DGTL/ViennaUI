import React, { SVGAttributes } from 'react';

export interface TaxiProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Taxi: React.FC<TaxiProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M2 16h20l1 1v1H1v-1l1-1zm5-6h2v2H7v-2zm2 2h2v2H9v-2zm4 0h2v2h-2v-2zm-2-2h2v2h-2v-2zm4 0h2v2h-2v-2zm-9.867 5H3.09l.792-7.119A2.148 2.148 0 016.013 6h11.974c1.083 0 1.996.806 2.131 1.881L20.91 15h-2.043l-.75-7H5.883l-.75 7z' />
        </svg>
    );
};

Taxi.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Taxi.displayName = 'Taxi';
export default Taxi;
