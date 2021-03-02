import React, { SVGAttributes } from 'react';

export interface MinusProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Minus: React.FC<MinusProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path fillRule='evenodd' d='M20 13H4v-2h16v2z' clipRule='evenodd' />
        </svg>
    );
};

Minus.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Minus.displayName = 'Minus';
export default Minus;
