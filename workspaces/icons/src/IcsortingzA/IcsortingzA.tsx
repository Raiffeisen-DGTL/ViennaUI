import React, { SVGAttributes } from 'react';

export interface IcsortingzAProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const IcsortingzA: React.FC<IcsortingzAProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M3 19h18v-2H3v2zm0-6h14v-2H3v2zm0-6h10V5H3v2z' />
        </svg>
    );
};

IcsortingzA.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

IcsortingzA.displayName = 'IcsortingzA';
export default IcsortingzA;
