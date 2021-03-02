import React, { SVGAttributes } from 'react';

export interface MoneyBagRoubleProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const MoneyBagRouble: React.FC<MoneyBagRoubleProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M8.13 2.507A1 1 0 019 2h8a1 1 0 01.858 1.514L15.766 7H19v2h-2.955l3.89 5a4.956 4.956 0 01-3.913 8H12v-2h4.022a2.956 2.956 0 002.333-4.771L13.511 9H12a1 1 0 01-.857-.486l-3-5a1 1 0 01-.013-1.007zM13.434 7l1.8-3h-4.468l1.8 3h.868z'
                clipRule='evenodd'
            />
            <path
                fillRule='evenodd'
                d='M6 22v-3h4v-2H6v-1h3a3 3 0 000-6H4v4H2v2h2v1H2v2h2v3h2zm3-8a1.001 1.001 0 000-2H6v2h3z'
                clipRule='evenodd'
            />
        </svg>
    );
};

MoneyBagRouble.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

MoneyBagRouble.displayName = 'MoneyBagRouble';
export default MoneyBagRouble;
