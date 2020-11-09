import React, { SVGAttributes } from 'react';

export interface BarbellProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Barbell: React.FC<BarbellProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M18 11V7h2v10h-2v-4H6v4H4V7h2v4h12zM1 11V7h2v10H1v-4H0v-2h1zm23 0v2h-1v4h-2V7h2v4h1z' />
        </svg>
    );
};

Barbell.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Barbell.displayName = 'Barbell';
export default Barbell;
