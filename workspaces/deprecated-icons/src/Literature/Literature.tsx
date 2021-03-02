import React, { SVGAttributes } from 'react';

export interface LiteratureProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Literature: React.FC<LiteratureProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M5.396 22l2-2H20v2H5.396zM16.754 2.073L21 2.032v4.835a6.77 6.77 0 01-1.981 4.787L13.176 17.5a4.683 4.683 0 01-5.87.607L3.414 22H2v-1.414l11.624-11.63h1.33v1.5l-6.171 6.171a2.757 2.757 0 002.976-.544l5.841-5.845a4.733 4.733 0 001.4-3.37V4.052l-2.835.031-8.2 8.2a2.673 2.673 0 00-.675 1.175l-1.89 1.89a5.029 5.029 0 011.3-4.63L14.32 3.1a3.488 3.488 0 012.434-1.027z' />
        </svg>
    );
};

Literature.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Literature.displayName = 'Literature';
export default Literature;
