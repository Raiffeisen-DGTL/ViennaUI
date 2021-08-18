import React, { SVGAttributes } from 'react';

export interface BarbellProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Barbell: React.FC<BarbellProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M2 7a1 1 0 011-1h4a1 1 0 011 1v4h8V7a1 1 0 011-1h4a1 1 0 011 1v4h1v2h-1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4H8v4a1 1 0 01-1 1H3a1 1 0 01-1-1v-4H1v-2h1V7zm2 1v8h2V8H4zm14 8V8h2v8h-2z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Barbell.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Barbell.displayName = 'Barbell';
export default Barbell;
