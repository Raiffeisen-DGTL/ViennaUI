import React, { SVGAttributes } from 'react';

export interface DocEditProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const DocEdit: React.FC<DocEditProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M6 3a1 1 0 011-1h14a1 1 0 011 1v18a1 1 0 01-1 1h-9v-2h8V4H8v5H6V3z'
                clipRule='evenodd'
            />
            <path
                fillRule='evenodd'
                d='M10.293 9.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-8 8A1 1 0 016 22H3a1 1 0 01-1-1v-3a1 1 0 01.293-.707l8-8zM4 18.414V20h1.586l7-7L11 11.414l-7 7z'
                clipRule='evenodd'
            />
        </svg>
    );
};

DocEdit.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

DocEdit.displayName = 'DocEdit';
export default DocEdit;
