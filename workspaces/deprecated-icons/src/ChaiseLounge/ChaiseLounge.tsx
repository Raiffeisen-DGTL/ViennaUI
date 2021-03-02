import React, { SVGAttributes } from 'react';

export interface ChaiseLoungeProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ChaiseLounge: React.FC<ChaiseLoungeProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M17.541 17.128l2.167 2.166-1.414 1.414-2.88-2.879A9.052 9.052 0 0113.64 18H9.36a7.072 7.072 0 00-5.03 2.084l-.623.624-1.414-1.414.623-.623A9.059 9.059 0 019.36 16h4.28a7.069 7.069 0 005.029-2.083l1.968-1.967 1.414 1.414-1.968 1.967a9.051 9.051 0 01-2.542 1.797zM13 3.5L22 8v2H2V8l9-4.5V2.001h2V3.5zm-1 1.738L6.472 8h11.056L12 5.238zm-1 4.763h2v5h-2v-5z' />
        </svg>
    );
};

ChaiseLounge.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ChaiseLounge.displayName = 'ChaiseLounge';
export default ChaiseLounge;
