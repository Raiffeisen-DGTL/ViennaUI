import React, { SVGAttributes } from 'react';

export interface Refresh2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Refresh2: React.FC<Refresh2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M11 22.001a10 10 0 009.98-9.619l1.632 1.62h1.357L24 13.97v-1.409l-4-3.97-4 4V14h1.414l1.564-1.565a8 8 0 11-1.029-4.384l1.451-1.45a10 10 0 10-8.4 15.4z' />
        </svg>
    );
};

Refresh2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Refresh2.displayName = 'Refresh2';
export default Refresh2;
