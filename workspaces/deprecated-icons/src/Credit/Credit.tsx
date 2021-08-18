import React, { SVGAttributes } from 'react';

export interface CreditProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Credit: React.FC<CreditProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M15 15h7v2h-7v-2zm5-1h-5v-2h5V5H4v3H2V5a2 2 0 012-2h16a2 2 0 012 2v7a2 2 0 01-2 2zm-5-8h4v2h-4V6zM2 19.586L12.586 9H14v1.414L3.414 21H2v-1.414zM5.2 10.8H3.8v1.4h1.4v-1.4zm-3.2.177C2 9.885 2.885 9 3.977 9h1.046C6.115 9 7 9.885 7 10.977v1.046A1.977 1.977 0 015.023 14H3.977A1.977 1.977 0 012 12.023v-1.046zM12.2 17.8h-1.4v1.4h1.4v-1.4zm-3.2.177C9 16.885 9.885 16 10.977 16h1.046A1.977 1.977 0 0114 17.977v1.046A1.977 1.977 0 0112.023 21h-1.046A1.977 1.977 0 019 19.023v-1.046z' />
        </svg>
    );
};

Credit.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Credit.displayName = 'Credit';
export default Credit;
