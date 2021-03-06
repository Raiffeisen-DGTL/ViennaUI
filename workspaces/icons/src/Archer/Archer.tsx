import React, { SVGAttributes } from 'react';

export interface ArcherProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Archer: React.FC<ArcherProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M21 2h-5v2h2.586l-3.11 3.11c-2.75-2.397-5.59-2.986-7.817-2.922a11.33 11.33 0 00-3.421.635l-1.53-1.53-1.415 1.414L9.586 13l-1 1H5a1 1 0 00-.707.293l-3 3a1 1 0 00.39 1.656l2.526.842.842 2.525a1 1 0 001.656.391l3-3A1 1 0 0010 19v-3.586l1-1 8.293 8.293 1.414-1.414-1.53-1.53a11.33 11.33 0 00.636-3.421c.063-2.227-.526-5.069-2.923-7.818L20 5.414V8h2V3a1 1 0 00-1-1zm-6.942 6.528c-2.291-1.95-4.58-2.391-6.342-2.34a9.362 9.362 0 00-1.87.244L11 11.586l3.058-3.058zM12.414 13l3.058-3.058c1.95 2.291 2.391 4.58 2.34 6.342a9.361 9.361 0 01-.244 1.87L12.414 13zm-7 3H8v2.586l-1.563 1.563-.488-1.465a1 1 0 00-.633-.633l-1.465-.488L5.414 16z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Archer.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Archer.displayName = 'Archer';
export default Archer;
