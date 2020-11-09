import React, { SVGAttributes } from 'react';

export interface ArrowDownProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ArrowDown: React.FC<ArrowDownProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M20.207 12.207v-1.414h-1.414l-6.586 6.586V2.793h-2v14.586l-6.586-6.586H2.207v1.414l9 9 9-9z' />
        </svg>
    );
};

ArrowDown.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ArrowDown.displayName = 'ArrowDown';
export default ArrowDown;
