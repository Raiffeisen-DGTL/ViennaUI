import React, { SVGAttributes } from 'react';

export interface EquallyProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Equally: React.FC<EquallyProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M3 10h18V8H3v2zm0 6h18v-2H3v2z' />
        </svg>
    );
};

Equally.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Equally.displayName = 'Equally';
export default Equally;
