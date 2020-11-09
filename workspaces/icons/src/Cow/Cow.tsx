import React, { SVGAttributes } from 'react';

export interface CowProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Cow: React.FC<CowProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M17.281 9H18.5a3.5 3.5 0 000-7H18v2h.5a1.5 1.5 0 010 3h-13a1.5 1.5 0 010-3H6V2h-.5a3.5 3.5 0 000 7h1.219l-.5 2H2v1l1 1h3.2l1.65 7.424A2.011 2.011 0 009.812 22h4.376c.943 0 1.76-.655 1.964-1.576L17.8 13H21l1-1v-1h-4.219l-.5-2zM14.2 20H9.8l-1.775-7.986L8.781 9h6.438l.754 3.014L14.2 20z' />
        </svg>
    );
};

Cow.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Cow.displayName = 'Cow';
export default Cow;
