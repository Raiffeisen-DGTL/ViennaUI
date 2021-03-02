import React, { SVGAttributes } from 'react';

export interface Satellite3Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Satellite3: React.FC<Satellite3Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M11.11 11.476a5.973 5.973 0 01-1.069-4.184l-6.468 4.527-1.146-1.638 9.977-6.985a6 6 0 018.4 8.4l-6.985 9.977-1.638-1.146 4.527-6.468a5.972 5.972 0 01-4.185-1.068l-6.816 6.816-1.414-1.414 6.816-6.816zM12 8a4 4 0 111.968 3.446l1.74-1.739-1.415-1.414-1.74 1.739A3.982 3.982 0 0112 8z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Satellite3.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Satellite3.displayName = 'Satellite3';
export default Satellite3;
