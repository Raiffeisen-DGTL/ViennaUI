import React, { SVGAttributes } from 'react';

export interface ArrowUpProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ArrowUp: React.FC<ArrowUpProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M2.207 11.793v1.414h1.414l6.586-6.586v14.586h2V6.621l6.586 6.586h1.414v-1.414l-9-9-9 9z' />
        </svg>
    );
};

ArrowUp.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ArrowUp.displayName = 'ArrowUp';
export default ArrowUp;
