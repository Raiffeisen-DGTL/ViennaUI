import React, { SVGAttributes } from 'react';

export interface ForwardProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Forward: React.FC<ForwardProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M2 11.02v2h16.485l-5.832 5.552 1.378 1.449 7.658-7.289a1 1 0 00.001-1.448L14.032 3.98l-1.38 1.448 5.864 5.594H2z' />
        </svg>
    );
};

Forward.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Forward.displayName = 'Forward';
export default Forward;
