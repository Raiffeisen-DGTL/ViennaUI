import React, { SVGAttributes } from 'react';

export interface ArrowRightProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ArrowRight: React.FC<ArrowRightProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M11.414 3H10v1.414L16.586 11H2v2h14.586L10 19.586V21h1.414l9-9z' />
        </svg>
    );
};

ArrowRight.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ArrowRight.displayName = 'ArrowRight';
export default ArrowRight;
