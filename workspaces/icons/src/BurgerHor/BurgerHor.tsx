import React, { SVGAttributes } from 'react';

export interface BurgerHorProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const BurgerHor: React.FC<BurgerHorProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M22 18v2H2v-2h20zm0-7v2H2v-2h20zm0-7v2H2V4h20z' />
        </svg>
    );
};

BurgerHor.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

BurgerHor.displayName = 'BurgerHor';
export default BurgerHor;
