import React, { SVGAttributes } from 'react';

export interface CardLockProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CardLock: React.FC<CardLockProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M20 2a2 2 0 012 2v10a2 2 0 01-2 2h-7v-2h7V8H2V4a2 2 0 012-2h16zM4 6h16V4H4v2zm7 8.276A1.992 1.992 0 0112 16v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4a1.992 1.992 0 011-1.724V13a4 4 0 118 0v1.276zM5 13v1h4v-1a2 2 0 10-4 0zm5 7v-4H4v4h6z' />
        </svg>
    );
};

CardLock.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CardLock.displayName = 'CardLock';
export default CardLock;
