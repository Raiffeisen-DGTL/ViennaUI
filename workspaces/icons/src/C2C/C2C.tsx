import React, { SVGAttributes } from 'react';

export interface C2CProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const C2C: React.FC<C2CProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M1 6a3 3 0 013-3h15v2H4a1 1 0 00-1 1v11H1V6z' />
            <path d='M5 9a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2v-2h2v2h14v-6h-4v-2h4V9H7v2H5V9z' />
            <path d='M14.707 13.293l-3-3-1.414 1.414L11.586 13H5v2h6.586l-1.293 1.293 1.414 1.414 3-3a1 1 0 000-1.414z' />
        </svg>
    );
};

C2C.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

C2C.displayName = 'C2C';
export default C2C;
