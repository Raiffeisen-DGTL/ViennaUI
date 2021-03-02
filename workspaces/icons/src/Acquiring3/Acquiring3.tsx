import React, { SVGAttributes } from 'react';

export interface Acquiring3Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Acquiring3: React.FC<Acquiring3Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M7 3a1 1 0 011-1h6a1 1 0 011 1v1h4a1 1 0 011 1v5h-2V6h-3v2h1v2H6V8h1V6H4v14h14v2H3a1 1 0 01-1-1V5a1 1 0 011-1h4V3zm2 5h4V4H9v4z'
                clipRule='evenodd'
            />
            <path d='M14.293 15.707l3 3 1.414-1.414L17.414 16H22v-2h-4.586l1.293-1.293-1.414-1.414-3 3a1 1 0 000 1.414zM6 18v-2h2v2H6zm4-6v2h2v-2h-2zm0 6v-2h2v2h-2zm-4-6v2h2v-2H6z' />
        </svg>
    );
};

Acquiring3.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Acquiring3.displayName = 'Acquiring3';
export default Acquiring3;
