import React, { SVGAttributes } from 'react';

export interface RightProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Right: React.FC<RightProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M9.414 3H7.999v1.414L15.585 12l-7.586 7.586V21h1.415l9-9z' />
        </svg>
    );
};

Right.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Right.displayName = 'Right';
export default Right;
