import React, { SVGAttributes } from 'react';

export interface Scheme2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Scheme2: React.FC<Scheme2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M15 5a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 01-1 1h-5a1 1 0 01-1-1v-.882l-4 2v1.764l4 2V14a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 01-1 1h-5a1 1 0 01-1-1v-1.882l-4-2V17a1 1 0 01-1 1H3a1 1 0 01-1-1V7a1 1 0 011-1h7a1 1 0 011 1v1.882l4-2V5zm2 1v3h3V6h-3zM4 8v8h5V8H4zm13 10v-3h3v3h-3z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Scheme2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Scheme2.displayName = 'Scheme2';
export default Scheme2;
