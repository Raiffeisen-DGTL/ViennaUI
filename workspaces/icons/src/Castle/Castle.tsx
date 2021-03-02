import React, { SVGAttributes } from 'react';

export interface CastleProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Castle: React.FC<CastleProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M3 3a1 1 0 00-1 1v5a1 1 0 00.553.894L4 10.618V21h2V10a1 1 0 00-.553-.894L4 8.382V5h2v2h2V5h2v2h2V5h2v3.382l-1.447.724A1 1 0 0012 10v2.5l2-1.5v-.382l1.447-.724A1 1 0 0016 9V4a1 1 0 00-1-1H3z' />
            <path d='M8 10v4h2v-4H8zm7 11v-3h2v3h-2z' />
            <path d='M10 18l-.64-.768 6-5a1 1 0 011.28 0l6 5L22 18v3h-2v-3.365l-4-3.333-4 3.333V21h-2v-3z' />
        </svg>
    );
};

Castle.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Castle.displayName = 'Castle';
export default Castle;
