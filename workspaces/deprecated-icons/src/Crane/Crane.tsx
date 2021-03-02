import React, { SVGAttributes } from 'react';

export interface CraneProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Crane: React.FC<CraneProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M17 2l4 4v3h-5v2h-2V9H2V7h4.586l-3-3H2V2h15zm-5.414 2H6.414L9 6.586 11.586 4zM19 7v-.172L16.172 4h-1.758l-3 3H19zm-3 7.555A4 4 0 1110 18h1.8a2.2 2.2 0 102.2-2.2V14h-1v-2h4v2h-1v.555z' />
        </svg>
    );
};

Crane.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Crane.displayName = 'Crane';
export default Crane;
