import React, { SVGAttributes } from 'react';

export interface PoliceCap1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const PoliceCap1: React.FC<PoliceCap1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M13 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3z' />
            <path d='M24.81 8.49l-3.14-4.32a.987.987 0 00-.48-.35l-7.86-2.76a.937.937 0 00-.66 0L4.81 3.82c-.19.07-.36.19-.48.35L1.19 8.49c-.28.38-.25.91.07 1.26L5 13.89v4.2c0 .16.04.31.11.46C5.2 18.73 7.45 23 13 23s7.8-4.27 7.89-4.46c.07-.14.11-.3.11-.46v-4.2l3.74-4.13c.32-.35.35-.88.07-1.26zM19 14.3c-.86.26-2.76.7-6 .7-3.23 0-5.14-.43-6-.7v-1.36c1.1-.33 3.45-.94 6-.94s4.9.61 6 .95v1.35zM13 21c-3.75 0-5.55-2.46-6-3.18v-1.45c1.18.3 3.13.63 6 .63s4.82-.33 6-.62v1.45c-.45.71-2.26 3.17-6 3.17zm7.55-9.6c-.06-.04-.13-.09-.2-.11C20.21 11.23 16.87 10 13 10c-3.87 0-7.21 1.23-7.35 1.29-.07.03-.14.07-.2.11L3.29 9.01 5.77 5.6 13 3.06l7.23 2.54 2.48 3.41-2.16 2.39z' />
        </svg>
    );
};

PoliceCap1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

PoliceCap1.displayName = 'PoliceCap1';
export default PoliceCap1;
