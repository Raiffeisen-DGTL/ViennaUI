import React, { SVGAttributes } from 'react';

export interface MoreHorProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const MoreHor: React.FC<MoreHorProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M4 10a2 2 0 110 4 2 2 0 010-4zm16 0a2 2 0 110 4 2 2 0 010-4zm-8 0a2 2 0 110 4 2 2 0 010-4z' />
        </svg>
    );
};

MoreHor.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

MoreHor.displayName = 'MoreHor';
export default MoreHor;
