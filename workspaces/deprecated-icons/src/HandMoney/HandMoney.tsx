import React, { SVGAttributes } from 'react';

export interface HandMoneyProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const HandMoney: React.FC<HandMoneyProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M18.884 10h3.117v11h-20v-6.312l2 1.645V19h16v-7h-8.719l3.061 1.866a1.647 1.647 0 01.744 2.337l-.812 1.235a2 2 0 01-2.4.612c-2.1-.779-6.643-2.436-8.3-4.093A5.321 5.321 0 012.001 10h2a3.353 3.353 0 00.987 2.541c1.644 1.644 6.16 3.278 7.765 3.81l.651-1.063-5.029-3.3L10.301 10h6.051l-3.179-4H2.001V4h12l4.883 6zm-2.883 3h3v1.719h-3V13z' />
        </svg>
    );
};

HandMoney.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

HandMoney.displayName = 'HandMoney';
export default HandMoney;
