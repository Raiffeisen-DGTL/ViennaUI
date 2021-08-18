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
            <path d='M11 9v3a1 1 0 00.293.707l2 2 1.414-1.414L13 11.586V9h-2z' />
            <path
                fillRule='evenodd'
                d='M7 2a1 1 0 011-1h8a1 1 0 011 1v5h-.101A6.98 6.98 0 0119 12a6.98 6.98 0 01-2.101 5H17v5a1 1 0 01-1 1H8a1 1 0 01-1-1v-5h.101A6.979 6.979 0 015 12c0-1.959.804-3.73 2.101-5H7V2zm2 16.326V21h6v-2.674A6.973 6.973 0 0112 19a6.973 6.973 0 01-3-.674zM15 3v2.674A6.973 6.973 0 0012 5c-1.074 0-2.09.242-3 .674V3h6zm-8 9a5 5 0 1110 0 5 5 0 01-10 0z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Accessories.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Accessories.displayName = 'Accessories';
export default Accessories;
