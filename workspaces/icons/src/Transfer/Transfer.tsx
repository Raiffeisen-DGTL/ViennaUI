import React, { SVGAttributes } from 'react';

export interface TransferProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Transfer: React.FC<TransferProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M4 17.016L18.016 17H20v.016A1.984 1.984 0 0118.016 19H3.984A1.984 1.984 0 012 17.016V6.984C2 5.888 2.888 5 3.984 5h14.032C19.112 5 20 5.888 20 6.984V7H3.984L4 17.016zM19.131 16H18v-1.131L19.869 13H11v-2h8.869L18 9.131V8h1.131l4 4-4 4z' />
        </svg>
    );
};

Transfer.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Transfer.displayName = 'Transfer';
export default Transfer;
