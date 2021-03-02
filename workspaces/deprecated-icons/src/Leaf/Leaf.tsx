import React, { SVGAttributes } from 'react';

export interface LeafProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Leaf: React.FC<LeafProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M8.67 16.747a6.028 6.028 0 007.783-.623c3.635-3.635 3.637-9.31 3.41-11.924-2.613-.226-8.292-.224-11.925 3.403a6.02 6.02 0 00-1.366 6.369l-1.524 1.522a8.022 8.022 0 011.476-9.3C12.186.532 21.648 2.413 21.648 2.413s1.852 9.492-3.779 15.124a8.022 8.022 0 01-10.626.637l-3.536 3.533-1.414-1.414L13.595 9h1.393v1.435l-6.317 6.312z' />
        </svg>
    );
};

Leaf.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Leaf.displayName = 'Leaf';
export default Leaf;
