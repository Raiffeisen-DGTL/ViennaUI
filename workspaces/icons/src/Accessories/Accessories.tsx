import React, { SVGAttributes } from 'react';

export interface AccessoriesProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Accessories: React.FC<AccessoriesProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M17 5a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h10zm0 12V7H7v10h10zm-1-4h-5V8h2v3h3v2zM7 2h10v2H7V2zm0 18h10v2H7v-2z' />
        </svg>
    );
};

Accessories.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Accessories.displayName = 'Accessories';
export default Accessories;
