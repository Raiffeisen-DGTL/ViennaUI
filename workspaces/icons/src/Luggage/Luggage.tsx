import React, { SVGAttributes } from 'react';

export interface LuggageProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Luggage: React.FC<LuggageProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M13 12v6h2v-6h-2zm-4 6v-6h2v6H9z' />
            <path
                fillRule='evenodd'
                d='M15 3h1V1H8v2h1v5H7a2 2 0 00-2 2v10a2 2 0 002 2h.085a1.5 1.5 0 002.83 0h4.17a1.5 1.5 0 002.83 0H17a2 2 0 002-2V10a2 2 0 00-2-2h-2V3zm-4 5h2V3h-2v5zm6 12H7V10h10v10z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Luggage.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Luggage.displayName = 'Luggage';
export default Luggage;
