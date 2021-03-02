import React, { SVGAttributes } from 'react';

export interface YenJpProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const YenJp: React.FC<YenJpProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M6.832 3.445L12 11.197l5.168-7.752 1.664 1.11L15.202 10H18v2h-4.132L13 13.303V14h5v2h-5v5h-2v-5H6v-2h5v-.697L10.132 12H6v-2h2.798l-3.63-5.445 1.664-1.11z' />
        </svg>
    );
};

YenJp.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

YenJp.displayName = 'YenJp';
export default YenJp;
