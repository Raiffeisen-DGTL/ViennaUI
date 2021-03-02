import React, { SVGAttributes } from 'react';

export interface BranchInProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const BranchIn: React.FC<BranchInProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M11.514 3.126a1 1 0 01.972 0l9 5A1 1 0 0122 9v2a1 1 0 01-1 1H3a1 1 0 01-1-1V9a1 1 0 01.514-.874l9-5zM4 9.588V10h16v-.412l-8-4.444-8 4.444z'
                clipRule='evenodd'
            />
            <path d='M8.586 19H2v-2h6.586l-1.793-1.793 1.414-1.414 3.5 3.5a1 1 0 010 1.414l-3.5 3.5-1.414-1.414L8.586 19zM14 15h2v6h-2v-6zm7 6v-6h-2v6h2z' />
        </svg>
    );
};

BranchIn.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

BranchIn.displayName = 'BranchIn';
export default BranchIn;
