import React, { SVGAttributes } from 'react';

export interface PoliceCap2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const PoliceCap2: React.FC<PoliceCap2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M23.89 9.227C23.07 7.6 18.39 1 12 1 5.61 1 .93 7.6.11 9.227c-.21.42-.11.931.23 1.238L4 13.74v4.237c0 .164.04.317.11.47C4.2 18.631 6.45 23 12 23s7.8-4.37 7.89-4.564c.07-.143.11-.307.11-.47v-4.237l3.66-3.274c.34-.297.44-.808.23-1.228zM18 14.097c-.86.267-2.77.717-6 .717s-5.14-.44-6-.716v-1.392c1.1-.338 3.45-.972 6-.972s4.9.624 6 .972v1.392zm-6 6.856A6.926 6.926 0 016 17.7v-1.484c1.18.307 3.13.634 6 .634s4.82-.337 6-.634v1.483a6.942 6.942 0 01-6 3.254zm7.72-9.68a.991.991 0 00-.37-.266c-.14-.05-3.48-1.31-7.35-1.31-3.87 0-7.21 1.26-7.35 1.32a.868.868 0 00-.37.257L2.29 9.492c1.27-1.944 5-6.446 9.71-6.446 4.71 0 8.44 4.502 9.71 6.446l-1.99 1.78z' />
            <path d='M12 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3z' />
        </svg>
    );
};

PoliceCap2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

PoliceCap2.displayName = 'PoliceCap2';
export default PoliceCap2;
