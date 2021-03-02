import React, { SVGAttributes } from 'react';

export interface Treatment2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Treatment2: React.FC<Treatment2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M11 10h2v2h2v2h-2v2h-2v-2H9v-2h2v-2z' />
            <path
                fillRule='evenodd'
                d='M9 2a1 1 0 00-1 1v3H3a1 1 0 00-1 1v12a1 1 0 001 1h2v2h2v-2h10v2h2v-2h2a1 1 0 001-1V7a1 1 0 00-1-1h-5V3a1 1 0 00-1-1H9zm5 4V4h-4v2h4zM4 8v10h16V8H4z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Treatment2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Treatment2.displayName = 'Treatment2';
export default Treatment2;
