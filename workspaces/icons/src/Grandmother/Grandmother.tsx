import React, { SVGAttributes } from 'react';

export interface GrandmotherProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Grandmother: React.FC<GrandmotherProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M2 11a9 9 0 019-9h1a8.003 8.003 0 017.426 5.018A5 5 0 0119.065 17 9 9 0 012 13v-2zm17.801 3.891a3 3 0 00.155-5.735c.03.278.044.56.044.844h-2a6 6 0 00-6-6h-1a7 7 0 00-7 7v.899A5.002 5.002 0 0010 7h2a5 5 0 005 5h3v1a9.06 9.06 0 01-.199 1.891zM17.929 14H17a7.001 7.001 0 01-6-3.395 7 7 0 01-6.938 3.332A7.001 7.001 0 0017.93 14z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Grandmother.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Grandmother.displayName = 'Grandmother';
export default Grandmother;
