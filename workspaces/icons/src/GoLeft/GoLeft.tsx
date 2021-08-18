import React, { SVGAttributes } from 'react';

export interface GoLeftProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const GoLeft: React.FC<GoLeftProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M9.56 11.854l7.294 7.293-1.415 1.414-8-8a1 1 0 010-1.415l8-8 1.415 1.415-7.293 7.293z' />
        </svg>
    );
};

GoLeft.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

GoLeft.displayName = 'GoLeft';
export default GoLeft;
