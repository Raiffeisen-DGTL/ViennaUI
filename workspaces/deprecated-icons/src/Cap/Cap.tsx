import React, { SVGAttributes } from 'react';

export interface CapProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Cap: React.FC<CapProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M16.69 6.04a5 5 0 00-9.26 0 4.43 4.43 0 00-.81-.07A4.53 4.53 0 006.09 15v8h12v-8a4.53 4.53 0 00-.47-9c-.417-.019-.727-.005-.93.04zm.93 6.96h-1.53v8h-8v-2h7v-2h-7v-4H6.62a2.53 2.53 0 010-5.06 3.74 3.74 0 011.19.15c.22.09.89.27.89.27s.31-.68.38-.92a3.2 3.2 0 013-2.5 3.06 3.06 0 013 2.54c.07.34.21 1.09.21 1.09l1.06-.36a4.25 4.25 0 011.28-.27 2.53 2.53 0 110 5.06h-.01z' />
        </svg>
    );
};

Cap.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Cap.displayName = 'Cap';
export default Cap;
