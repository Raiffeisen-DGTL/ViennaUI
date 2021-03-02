import React, { SVGAttributes } from 'react';

export interface ToPayProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ToPay: React.FC<ToPayProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M2 21h20v2H2v-2zm6.136-1H4.864c-3.852-3.924-3.813-10.222.087-14.098a9.998 9.998 0 0114.098 0c3.9 3.876 3.94 10.174.087 14.098h-3.272a8 8 0 10-7.728 0zM13 14h-1.344v1.281H16V17h-4.344v2H10v-2H8v-1.719h2V14H8v-1.688h2V8h4a3 3 0 010 6h-1zm-1.3-4.3v2.6H14a1.3 1.3 0 100-2.6h-2.3z' />
        </svg>
    );
};

ToPay.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ToPay.displayName = 'ToPay';
export default ToPay;
