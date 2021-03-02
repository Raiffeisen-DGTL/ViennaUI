import React, { SVGAttributes } from 'react';

export interface PipesProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Pipes: React.FC<PipesProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M20.847 20H22v2H2v-2h1.153l2-12h7.694l1.334 8h2.444l.354 2h-2.465l.333 2h3.973l-1.666-10h-2.3l-.562-2h4.555l2 12zM5.181 20h7.638l-1.666-10H6.847l-1 6H10.7l.3 2H5.514l-.333 2zM10 6.833V7H8v-.167A4.838 4.838 0 0112.833 2h2.136v1.023L14 4h-1.167A2.836 2.836 0 0010 6.833zm7 0V7h-2v-.167A4.838 4.838 0 0119.833 2h2.12v.971L21 4h-1.167A2.836 2.836 0 0017 6.833z' />
        </svg>
    );
};

Pipes.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Pipes.displayName = 'Pipes';
export default Pipes;
