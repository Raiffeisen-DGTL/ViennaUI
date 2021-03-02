import React, { SVGAttributes } from 'react';

export interface BranchProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Branch: React.FC<BranchProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M11.514 2.126a1 1 0 01.972 0l9 5A1 1 0 0122 8v2a1 1 0 01-1 1H3a1 1 0 01-1-1V8a1 1 0 01.514-.874l9-5zM4 8.588V9h16v-.412l-8-4.444-8 4.444z'
                clipRule='evenodd'
            />
            <path d='M4 13h2v5H4v-5zm9 5v-5h-2v5h2zm5-5h2v5h-2v-5zm4 9v-2H2v2h20z' />
        </svg>
    );
};

Branch.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Branch.displayName = 'Branch';
export default Branch;
